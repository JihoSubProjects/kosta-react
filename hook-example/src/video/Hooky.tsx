import React, { useRef } from 'react';
import pexel from './pexels-2813368.mp4'

export default function Hooky(){
  const videoRef = useRef<HTMLVideoElement>(null);

  const pause = () => videoRef.current?.pause();
  const play = () => videoRef.current?.play();

  return(
    <div className="wrap">
      <video autoPlay muted loop ref={videoRef}>
        <source src={pexel} />
      </video>
      <p>
        <button onClick={pause}>Pause</button>
        <button onClick={play}>Play</button>
      </p>
      <a href="https://www.pexels.com/video/drone-footage-of-a-couple-holding-hands-walking-in-the-beach-2813368/">Video by Fikret Ceylan from Pexels</a>
    </div>
  )
}

