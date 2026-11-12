import React,{useRef} from 'react'
import './App.scss'
import ReactPlayer from 'react-player'


const App = () => {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const[isMuted, setIsMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(0.5);
  const[duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const playerRef = React.useRef(null);
  

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
  }

  function handleMuteUnmute() {
    setIsMuted(!isMuted);
  }

  function handleVolumeChange(event) {
    setVolume(parseFloat(event.target.value));
  }

  function handleDurationChange(event) {
    const mediaDuration = event.currentTarget?.duration;
    if (Number.isFinite(mediaDuration)) {
      setDuration(mediaDuration);
    }
  }

  function handleTimeUpdate(event) {
    const mediaTime = event.currentTarget?.currentTime;
    const mediaDuration = event.currentTarget?.duration;

    if (Number.isFinite(mediaTime)) {
      setCurrentTime(mediaTime);
    }
    if (Number.isFinite(mediaDuration)) {
      setDuration(mediaDuration);
    }
  }

  function seekBy(seconds) {
    const playerTime = playerRef.current?.currentTime;
    const time = Number.isFinite(playerTime) ? playerTime : currentTime;
    const nextTime = Math.max(
      0,
      Math.min(time + seconds, duration || Number.MAX_SAFE_INTEGER),
    );

    if (playerRef.current && Number.isFinite(nextTime)) {
      playerRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  }

  function handleForward() {
    seekBy(10);
  }

  function handleBackward() {
    seekBy(-10);
  }

  function formatTime(seconds) {
   if (!Number.isFinite(seconds)) {
     return '0:00';
   }

   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = Math.floor(seconds % 60);

   return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  return (
    <div>
      <ReactPlayer
      ref={playerRef}
      src='https://youtu.be/irVNGjRFZGk?si=cjY0Xvx56cWICww4' 
      width={'100%'}
      height={'700px'}
      playing={isPlaying}
      muted={isMuted}
      volume={volume}
      onDurationChange={handleDurationChange}
      onTimeUpdate={handleTimeUpdate}
      />
      <article>
        <span>{formatTime(currentTime)}</span>
        <input
          type='range'
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          disabled={!duration}
          onChange={(event) => {
            const nextTime = parseFloat(event.target.value);
            if (Number.isFinite(nextTime)) {
              if (playerRef.current) {
                playerRef.current.currentTime = nextTime;
              }
              setCurrentTime(nextTime);
            }
          }}
        />
        <span>{formatTime(duration)}</span>
      </article>

      <section>
        <div className='left'>
          <button onClick={handleMuteUnmute}>{isMuted ? 'Unmute' : 'Mute'}</button>
          <input type='range' min={0} max={1} step={0.01} value={volume} onChange={handleVolumeChange}/>
        </div>
        <div className='center'>
          <button onClick={handleBackward}>Backward 10s</button>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={handleForward}>Forward 10s</button>

        </div>
        <div className='right'>
          <button>Fullscreen</button>
        
        </div>
        
      </section>
    </div>
  )
}

export default App