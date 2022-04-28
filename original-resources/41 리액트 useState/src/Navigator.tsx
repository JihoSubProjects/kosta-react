import React from 'react';
import {Link} from 'react-router-dom';
import './Navigator.scss';

export default function Navigator(){
  return(
    <div className="navi">
      <h2>목차</h2>
      <ul>
        <li>
          <Link to="/">홈페이지</Link>
        </li>
        <li>
          <Link to="/classy">클래스형</Link>
        </li>
        <li>
          <Link to="/hooky">함수형</Link>
        </li>
      </ul>
    </div>
  )
}

