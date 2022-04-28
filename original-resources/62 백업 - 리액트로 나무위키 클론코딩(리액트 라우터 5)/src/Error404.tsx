import React from 'react';
import error404 from './img/error404.png';
import './scss/Error404.scss'

export default function Error404(props){
  return(
    <div className="error404">
      <img src={error404} alt="error404" />
      <button onClick={props.history.goBack}>뒤로 가기</button>
    </div>
  )
}