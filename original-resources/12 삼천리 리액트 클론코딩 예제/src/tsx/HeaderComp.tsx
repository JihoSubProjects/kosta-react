import React from 'react';
import '../scss/HeaderComp.scss';
import logo from '../img/logo.gif';
import btn_search_1 from '../img/btn_search_1.gif'

function HeaderComp(){
  return (
    <header className="cf">
      <div className="h_logo">
        <img alt="h_logo" src={logo} />
      </div>
      <div className="h_right1">
        <ul>
          <li><a href="javascript:;">로그인</a></li>
          <li><a href="javascript:;">회원가입</a></li>
          <li><a href="javascript:;">사이트맵</a></li>
          <li><a href="javascript:;">English</a></li>
        </ul>
        <div className="h_sbox">
          <form action="javascript:;" method="post">
            <input className="h_s_tbox" type="text" placeholder="검색어 입력" />
            <input className="h_s_img" type="image" alt="h_search" src={btn_search_1} />
          </form>
        </div>
      </div>
      <div className="h_right2">
        <ul>
          <li><a href="javascript:;">기업소개</a>
            <ul>
              <li><a href="javascript:;">그룹소개</a></li>
              <li><a href="javascript:;">CEO 인사말</a></li>
              <li><a href="javascript:;">연혁</a></li>
              <li><a href="javascript:;">CI</a></li>
              <li><a href="javascript:;">고객만족</a></li>
              <li><a href="javascript:;">사회공헌</a></li>
              <li><a href="javascript:;">윤리경영</a></li>
              <li><a href="javascript:;">GWP</a></li>
              <li><a href="javascript:;">찾아오시는 길</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">사업소개</a>
            <ul>
              <li><a href="javascript:;">도시가스사업</a></li>
              <li><a href="javascript:;">발전 및 집단에너지사업</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">R&D</a>
            <ul>
              <li><a href="javascript:;">그룹소개</a></li>
              <li><a href="javascript:;">CEO 인사말</a></li>
              <li><a href="javascript:;">연혁</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">투자정보</a>
            <ul>
              <li><a href="javascript:;">지배구조</a></li>
              <li><a href="javascript:;">재무정보</a></li>
              <li><a href="javascript:;">주가정보</a></li>
              <li><a href="javascript:;">공시/공고</a></li>
              <li><a href="javascript:;">IR자료실</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">홍보센터</a>
            <ul>
              <li><a href="javascript:;">뉴스센터</a></li>
              <li><a href="javascript:;">홍보영상</a></li>
              <li><a href="javascript:;">사보</a></li>
              <li><a href="javascript:;">Annual Report</a></li>
              <li><a href="javascript:;">PR Library</a></li>
              <li><a href="javascript:;">사이버 역사관</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">고객센터</a>
            <ul>
              <li><a href="javascript:;">공지사항</a></li>
              <li><a href="javascript:;">안내</a></li>
              <li><a href="javascript:;">조회/납부</a></li>
              <li><a href="javascript:;">신청</a></li>
              <li><a href="javascript:;">문의</a></li>
              <li><a href="javascript:;">전기(광역 역세권)</a></li>
            </ul>
          </li>
          <li><a href="javascript:;">인재채용</a></li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderComp;