import React from 'react';
import '../scss/SectionComp1.scss';

import s_c from '../img/s_c.jpg';
import btn_off_4 from '../img/btn_off_4.png';

import ico01 from '../img/ico_quick01.png';
import ico02 from '../img/ico_quick02.png';
import ico03 from '../img/ico_quick03.png';
import ico04 from '../img/ico_quick04.png';
import ico05 from '../img/ico_quick05.png';

function SectionComp1(){
  return (
    <section id="s1">
      <div className="f_container">
        <p className="f_txt">
          신뢰와 나눔 속에<br />사랑 받는 기업으로
          <a href="javascript:;">
            <img className="f_circle" alt="f_circle" src={btn_off_4} />
          </a>
        </p>
        <div className="f_wrap cf">
          <ul className="f_menu">
            <li><a href="javascript:;"><img alt="f_menu1" src={ico01} />요금조회</a></li>
            <li><a href="javascript:;"><img alt="f_menu1" src={ico02} />요금납부</a></li>
            <li><a href="javascript:;"><img alt="f_menu1" src={ico03} />전출입신청</a></li>
            <li><a href="javascript:;"><img alt="f_menu1" src={ico04} />신청서양식</a></li>
            <li><a href="javascript:;"><img alt="f_menu1" src={ico05} />톡서비스</a></li>
          </ul>
          <form action="javascript:;" method="post">

            <div className="f_form">
              <p>간편요금조회</p>
              <input type="text" className="f_f_txt" placeholder="납부자번호 입력" />
              <input type="image" className="f_f_img" alt="f_f_img" src={s_c} />
            </div>
          </form>
          <a href="javascript:;" className="f_co"></a>
        </div>
      </div>
      <div className="f_img"></div>
    </section>
  )
}

export default SectionComp1;