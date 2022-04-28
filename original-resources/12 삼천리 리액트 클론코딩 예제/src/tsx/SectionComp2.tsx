import React from 'react';
import '../scss/SectionComp2.scss';

import m_1_1_1 from '../img/lkprqhawwkss4bvydmob.jpg';
import m_1_1_2 from '../img/yaaccfhghsemo8hnyhhs.jpg';

import m_1_2_1_i from '../img/sbg8wjvbpgzfazotdzij.jpg';
import m_1_2_2_i from '../img/mn71mycm9lkrn5eycexx.jpg';
import m_1_2_3_i from '../img/zcx7b3i8xaccvqpuuijb.jpg';
import m_1_2_4_i from '../img/lc6bejkaalep51yp9h0n.jpg';
import m_1_2_5_i from '../img/xlxv9kna30qhzqswvrw0.jpg';
import m_1_2_6_i from '../img/jow4nghnv2rnngduqmqz.jpg';
import m_1_2_7_i from '../img/m2h18say4wmhkf6wq811.jpg';

import btn_more_1 from '../img/btn_more_1.gif';


function SectionComp2(){
  return (
    <section id="s2">
      <div className="main_1 cf">
        <ul className="m_1_1">
          <li>
            <a href="javascript:;" className="m_b m_1_1_1b"></a>
            <a href="javascript:;">
              <img className="m_1_1_1c" alt="m_1_1_1" src={m_1_1_1} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_b m_1_1_2b"></a>
            <a href="javascript:;">
              <img className="m_1_1_2c" alt="m_1_1_2" src={m_1_1_2} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_b m_1_1_3b"></a>
          </li>
        </ul>
        <ul className="m_1_2 cf">
          <li>
            <a href="javascript:;" className="m_1_2_n">뉴스센터</a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_1b"></a>
            <a href="javascript:;" className="m_1_2_1">
              <div className="m_1_2_left">
                <p>삼천리그룹 2020년<br />시무식 개최</p>
                <p>2020.01.02</p>
              </div>
              <img alt="m_1_2_1_i" src={m_1_2_1_i} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_2b"></a>
            <a href="javascript:;" className="m_1_2_2">
              <div className="m_1_2_left">
                <p>삼천리 스포츠단 입단식<br />개최</p>
                <p>2020.01.02</p>
              </div>
              <img alt="m_1_2_2_i" src={m_1_2_2_i} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_3b"></a>
            <a href="javascript:;" className="m_1_2_3">
              <div className="m_1_2_left">
                <p>천만장학회 사랑나눔<br />봉사활동 실시</p>
                <p>2019.12.26</p>
              </div>
              <img alt="m_1_2_3_i" src={m_1_2_3_i} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_4b"></a>
            <a href="javascript:;" className="m_1_2_4">
              <div className="m_1_2_left">
                <p>2019 사랑나눔의 날<br />실시</p>
                <p>2019.12.17</p>
              </div>
              <img alt="m_1_2_4_i" src={m_1_2_4_i} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_5b"></a>
            <a href="javascript:;" className="m_1_2_5">
              <div className="m_1_2_left">
                <p>제11회 도시가스 업계<br />봉사의 날 '가스안전<br />사랑나눔' 실시</p>
                <p>2019.11.28</p>
              </div>
              <img alt="m_1_2_5_i" src={m_1_2_5_i} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_6b"></a>
            <a href="javascript:;" className="m_1_2_6">
              <div className="m_1_2_left">
                <p>삼천리그룹 임원부인회<br />김장 담그기 봉사활동<br />실시</p>
                <p>2019.11.19</p>
              </div>
              <img alt="m_1_2_6_i" src={m_1_2_6_i} />
            </a>
          </li>
          <li>
            <a href="javascript:;" className="m_1_2_7b"></a>
            <a href="javascript:;" className="m_1_2_7">
              <div className="m_1_2_left">
                <p>'제18회 가스안전환경<br />공모전 시상식' 개최</p>
                <p>2019.11.13</p>
              </div>
              <img alt="m_1_2_7_i" src={m_1_2_7_i} />
            </a>
          </li>
        </ul>
        <div className="m_1_3 cf">
          <a href="javascript:;">공지사항</a>
          <a href="javascript:;" className="cf"><img className="m_plus" alt="plus" src={btn_more_1} /></a>
          <a href="javascript:;">2019년 제 18회 가스안전 환경 공모전 수상자 발표</a>
          <a href="javascript:;">추석연휴 고객서비스 일부 사용 제한 안내(9.11~16)</a>
        </div>
        <div className="main_bg_1 cf">
          <div className="main_bg_1_1"></div>
          <div className="main_bg_1_2"></div>
        </div>
      </div>
    </section>
  )
}

export default SectionComp2;