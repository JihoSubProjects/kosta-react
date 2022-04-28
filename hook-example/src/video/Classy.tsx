import React from 'react';
import pexel from './pexels-2813368.mp4'

export default class Classy extends React.Component<{},{}> {
  videoRef:React.RefObject<HTMLVideoElement>;

  constructor(props:{}){
    super(props);
    this.videoRef = React.createRef<HTMLVideoElement>()
  }

  pauseFn = () => {
    this.videoRef.current?.pause();
  }

  playFn = () => {
    this.videoRef.current?.play();
  }

  render(){
    return(
      <div className="wrap">
        <video autoPlay muted loop ref={this.videoRef}>
          <source src={pexel} />
        </video>
        <p>
          <button onClick={this.pauseFn}>Pause</button>
          <button onClick={this.playFn}>Play</button>
        </p>
        <a href="https://www.pexels.com/video/drone-footage-of-a-couple-holding-hands-walking-in-the-beach-2813368/">Video by Fikret Ceylan from Pexels</a>
      </div>
    )
  }
}

