import React from 'react';
import '../scss/SectionComp4.scss';

import s4_1 from '../img/bg_etc_1.gif';
import s4_2 from '../img/bg_etc_2.gif';
import s4_3 from '../img/bg_etc_5.gif';
import s4_4 from '../img/bg_etc_3.gif';
import s4_5 from '../img/bg_etc_4.gif';


function SectionComp4(){
  return (
    <section id="s4">
		<ul className="cf">
			<li>
				<a href="javascript:;">
					<p>고객의 소리</p>
					<p>고객님의 궁금한<br />점을 남겨주세요</p>
				</a>
				<img alt="s4-1" src={s4_1} />
			</li>
			<li>
				<a href="javascript:;">
					<p>이용안내</p>
					<p>도시가스 관련<br />안내사항입니다.</p>
				</a>
				<img alt="s4-2" src={s4_2} />
			</li>
			<li>
				<a href="javascript:;">
					<p>연결비용 안내</p>
					<p>가스렌지 연결<br />비용 안내입니다.</p>
				</a>
				<img alt="s4-3" src={s4_3} />
			</li>
			<li>
				<a href="javascript:;">
					<p>고객센터</p>
					<p className="phonenum"></p>
				</a>
				<img alt="s4-4" src={s4_4} />
			</li>
			<li>
				<a href="javascript:;">
					<p>가스사고 신고접수</p>
					<p>가스 신고를 접수<br />하실 수 있습니다.</p>
				</a>
				<img alt="s4-5" src={s4_5} />
			</li>
		</ul>
	</section>
  )
}

export default SectionComp4;