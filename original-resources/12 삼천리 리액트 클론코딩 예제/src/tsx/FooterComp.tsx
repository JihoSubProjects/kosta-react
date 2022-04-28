import React from 'react';
import '../scss/FooterComp.scss';

import bg_footer_1 from '../img/bg_footer_1.gif';
import btn_confirm_3 from '../img/btn_confirm_3.gif'
import zon from '../img/zon.jpg';
import img_logo_1 from '../img/img_logo_1.gif';
import edu2 from '../img/edu2.png';


function FooterComp(){

  return (
    <footer>
      <div className="ft_container cf">
        <div className="ft_logo">
          <img alt="ft_logo" src={bg_footer_1} />
        </div>
        <ul className="ft_ul1 cf">
          <li><a href="javascript:;">개인정보 처리 방침</a></li>
          <li><a href="javascript:;">메일주소 무단수집거부</a></li>
          <li><a href="javascript:;">신용정보 조회사실 통보공시</a></li>
          <li><a href="javascript:;">이용약관</a></li>
          <li>
            <form action="javascript:;" method="post" className="ft_form">
              <select className="ft_select">
                <option value="javascript:;">Family Site</option>
                <option value="http://www.samtan.co.kr/">(주)삼탄</option>
                <option value="http://www.samchullyeng.co.kr/">(주)삼천리 ENG</option>
                <option value="http://www.samchullyes.co.kr/">(주)삼천리 ES</option>
                <option value="http://www.huces.co.kr/">(주)HUCES</option>
                <option value="http://www.chai797.co.kr/">(주)SL&C(Chai797)</option>
                <option value="http://www.samchullymotors.co.kr/">(주)삼천리모터스</option>
                <option value="https://www.cheonman.or.kr/">천만장학회</option>
              </select>
              <input type="image" className="confirm3" alt="confirm3" src={btn_confirm_3}/>
            </form>
          </li>
        </ul>
        <p className="address">07328 서울특별시 영등포구 국제금융로 6길 42 (주)삼천리<br />Copyright samchully Corp. All rights
          reserved.</p>
          <ul className="ft_ul2 cf">
            <li><img alt="ft_ul2_1" src={zon} /></li>
            <li><img alt="ft_ul2_2" src={img_logo_1} /></li>
            <li><img alt="ft_ul2_3" src={edu2} /></li>
          </ul>
      </div>
    </footer>
  )
}

export default FooterComp;