import React, { useState } from "react";
import "./Signin.css";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  async function handleonsignin(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      localStorage.setItem("AccessToken", userCredential.user.uid);
      navigate("/Home");
      setEmail("");
      setPassword("");
      navigate("/Chat");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Signin">
      <form onSubmit={handleonsignin}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign In</button>
        <br />
        <br />
        If you have No account? <Link to="/Signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Signin;
