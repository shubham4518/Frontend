
import React, { useEffect, useState } from 'react';
import { auth, db } from './Firebase';
import {
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {
  addDoc,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

// Your fixed chat partner's Firebase UID
const CHAT_PARTNER_UID = 'RscY7yGQWvZfCJIdvfoBIJTkDAZ2';

const Chat = () => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Wait for Firebase to restore the login session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);

      if (!currentUser) {
        navigate('/Signin', { replace: true });
      }
    });

    return unsubscribe;
  }, [navigate]);

  // Load messages for this specific conversation
  useEffect(() => {
    if (authLoading || !user) return;

    if (user.uid === CHAT_PARTNER_UID) {
      setLoading(false);
      setError(
        'You are signed in as the fixed chat partner. Sign in with the other account to start this conversation.'
      );
      return;
    }

    const participants = [user.uid, CHAT_PARTNER_UID].sort();

    const messagesQuery = query(
      collection(db, 'messages'),
      where('participants', '==', participants),
      orderBy('createdAt', 'asc')
    );

    setLoading(true);
    setError('');

    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => {
        setMessages(
          snapshot.docs.map((messageDoc) => ({
            id: messageDoc.id,
            ...messageDoc.data()
          }))
        );
        setLoading(false);
        setError('');
      },
      (err) => {
        console.error('Firestore message error:', err);
        setError(
          err.code === 'permission-denied'
            ? 'Access denied. Check your Firestore security rules.'
            : 'Could not load messages. Check your Firebase configuration.'
        );
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user, authLoading]);

  // Send a new message
  async function sendMessage(e) {
    e.preventDefault();

    const text = message.trim();

    if (!user || !text || user.uid === CHAT_PARTNER_UID) return;

    try {
      const participants = [user.uid, CHAT_PARTNER_UID].sort();

      await addDoc(collection(db, 'messages'), {
        text,
        senderId: user.uid,
        participants,
        createdAt: serverTimestamp(),
        updatedAt: null
      });

      setMessage('');
    } catch (err) {
      console.error('Send message error:', err);
      alert('Message could not be sent. Check Firestore rules.');
    }
  }

  // Start editing your own message
  function startEditing(msg) {
    if (msg.senderId !== user?.uid) return;

    setEditingId(msg.id);
    setEditText(msg.text);
  }

  // Save edited message
  async function saveEdit(id) {
    const text = editText.trim();

    if (!text || !user) return;

    const originalMessage = messages.find((msg) => msg.id === id);

    if (!originalMessage || originalMessage.senderId !== user.uid) {
      return;
    }

    try {
      await updateDoc(doc(db, 'messages', id), {
        text,
        updatedAt: serverTimestamp()
      });

      setEditingId(null);
      setEditText('');
    } catch (err) {
      console.error('Edit message error:', err);
      alert('Message could not be edited. Check Firestore rules.');
    }
  }

  // Delete your own message
  async function removeMessage(id) {
    const originalMessage = messages.find((msg) => msg.id === id);

    if (!originalMessage || originalMessage.senderId !== user?.uid) {
      return;
    }

    if (!window.confirm('Delete this message?')) return;

    try {
      await deleteDoc(doc(db, 'messages', id));
    } catch (err) {
      console.error('Delete message error:', err);
      alert('Message could not be deleted. Check Firestore rules.');
    }
  }

  async function handleLogout() {
    await signOut(auth);
    navigate('/Signin', { replace: true });
  }

  if (authLoading || !user) {
    return (
      <div className="chat-loading">
        Checking your login...
      </div>
    );
  }

  return (
    <div className="chat-dashboard">
      <aside className="chat-sidebar">
        <div className="chat-brand">
          <span className="brand-symbol">✉</span>
          <span>ChatMe</span>
        </div>

        <p className="sidebar-label">CHATS</p>

        <div className="sidebar-contact">
          <div className="contact-avatar">U</div>

          <div className="contact-info">
            <h3>Chat Partner</h3>
            <p>Private conversation</p>
          </div>

          <span className="contact-status" />
        </div>

        <div className="sidebar-note">
          <span>🔒</span>
          <p>Your personal one-to-one chat space.</p>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          ↪ Sign Out
        </button>
      </aside>

      <main className="chat-main">
        <header className="chat-header">
          <div className="header-user">
            <div className="contact-avatar header-avatar">U</div>

            <div>
              <h2>Chat Partner</h2>
              <p>
                <span className="contact-status" />
                Private conversation
              </p>
            </div>
          </div>

          <div className="header-badge">1-to-1 Chat</div>
        </header>

        <section className="chat-messages">
          {!loading && messages.length === 0 && !error && (
            <div className="chat-welcome">
              <div className="welcome-icon">💬</div>
              <h3>Your conversation starts here</h3>
              <p>Send a message to start chatting.</p>
            </div>
          )}

          {loading && (
            <p className="chat-notice">Loading messages...</p>
          )}

          {error && (
            <p className="chat-notice">{error}</p>
          )}

          {messages.map((msg) => {
            const isMine = msg.senderId === user.uid;

            return (
              <div
                key={msg.id}
                className={`message-row ${
                  isMine ? 'my-message-row' : 'their-message-row'
                }`}
              >
                <div className="message-content">
                  {editingId === msg.id ? (
                    <div className="edit-message-box">
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows={2}
                        autoFocus
                      />

                      <div className="edit-actions">
                        <button
                          type="button"
                          className="save-edit"
                          onClick={() => saveEdit(msg.id)}
                        >
                          Save
                        </button>

                        <button
                          type="button"
                          className="cancel-edit"
                          onClick={() => {
                            setEditingId(null);
                            setEditText('');
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="message-bubble">
                        {msg.text}
                      </div>

                      <div className="message-meta">
                        <span>
                          {msg.createdAt?.toDate
                            ? msg.createdAt.toDate().toLocaleTimeString(
                                [],
                                {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                }
                              )
                            : 'Sending...'}
                        </span>

                        {msg.updatedAt && <span> · edited</span>}
                      </div>

                      {isMine && (
                        <div className="message-actions">
                          <button
                            type="button"
                            onClick={() => startEditing(msg)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            onClick={() => removeMessage(msg.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        <form className="chat-composer" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            autoComplete="off"
          />

          <button
            type="submit"
            className="send-button"
            disabled={!message.trim() || Boolean(error)}
          >
            Send <span>➤</span>
          </button>
        </form>

        <p className="composer-footer">
          ChatMe · Simple. Personal. Connected.
        </p>
      </main>
    </div>
  );
};

export default Chat;
