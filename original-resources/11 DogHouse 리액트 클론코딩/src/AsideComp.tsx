import React from 'react';
import './AsideComp.scss';

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';

function AsideComp(){
  return (
    <aside className="side">
      <h2>강아지 사진</h2>
      <img src={img1} width="180" height="135" alt="dog1" />
      <img src={img2} width="180" height="135" alt="dog2" />
      <img src={img3} width="180" height="135" alt="dog3" />
	  </aside>
  )
}

export default AsideComp;