import React from 'react';
import {Link} from 'react-router-dom';
import './Navigator.scss';

export default function Navigator(){
  return(
    <div className="navi">
      <h2>목차</h2>
      <ul>
        <li><Link to="/">홈페이지</Link></li>
        <li><Link to="/classy">클래스형</Link></li>
        <li><Link to="/hooky">함수형</Link></li>
        <li><Link to="/video-classy">비디오 클래스형</Link></li>
        <li><Link to="/video-hooky">비디오 함수형</Link></li>
        <li><Link to="/crud-classy">CRUD 클래스형</Link></li>
        <li><Link to="/crud-hooky">CRUD 함수형</Link></li>
        <li><Link to="/effect-classy">Effect 클래스형</Link></li>
        <li><Link to="/effect-hooky">Effect 함수형</Link></li>
        <li><Link to="/memo-classy">Memo 클래스형</Link></li>
        <li><Link to="/memo-hooky">Memo 함수형</Link></li>
      </ul>
    </div>
  )
}

