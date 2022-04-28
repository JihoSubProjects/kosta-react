import React, { useRef } from 'react';
import pexel from './pexels-2813368.mp4'

export default function Hooky(){
  const videoRef:React.MutableRefObject<HTMLVideoElement> = useRef();

  const pauseFn = () => {
    videoRef.current.pause();
  }

  const playFn = () => {
    videoRef.current.play();
  }

  return(
    <div className="wrap">
      <video autoPlay muted loop ref={videoRef}>
        <source src={pexel} />
      </video>
      <p>
        <button onClick={pauseFn}>Pause</button>
        <button onClick={playFn}>Play</button>
      </p>
      <a href="https://www.pexels.com/video/drone-footage-of-a-couple-holding-hands-walking-in-the-beach-2813368/">Video by Fikret Ceylan from Pexels</a>
    </div>
  )
}

