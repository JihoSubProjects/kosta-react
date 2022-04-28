import React from 'react';
import './HeaderComp.scss';

function HeaderComp(){
  return (
    <>
      <header>
        <h1>DogHouse</h1>

      </header>
      <nav>
        <ul>
          <li><a href="#">반려견종류</a>
            <ul>
              <li><a href="#">소형견</a></li>
              <li><a href="#">중형견</a></li>
              <li><a href="#">대형견</a></li>
            </ul>
          </li>
          <li><a href="#">입양하기</a>
            <ul>
              <li><a href="#">입양안내</a></li>
              <li><a href="#">입양절차</a></li>
              <li><a href="#">입양신청</a></li>
            </ul>
          </li>
          <li><a href="#">건강돌보기</a>
            <ul>
              <li><a href="#">음식안내</a></li>
              <li><a href="#">환경안내</a></li>
              <li><a href="#">병원안내</a></li>
            </ul>
          </li>
          <li><a href="#">함께살기</a>
            <ul>
              <li><a href="#">반려견이해</a></li>
              <li><a href="#">반려견행동</a></li>
              <li><a href="#">반려견사랑</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderComp;