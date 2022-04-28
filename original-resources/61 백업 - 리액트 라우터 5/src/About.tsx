import React from 'react';
import {Route, Link} from 'react-router-dom';

import Address from './Address';
import Tel from './Tel';

export default function About(props){
  console.log(props);

  const queryPart = props.location.search.substr(1);

  const queryArray = queryPart.split('&');

  let queryObj = {};

  for(const item of queryArray){
    const aquery = item.split('=');
    queryObj[aquery[0]] = aquery[1];
  };

  console.log(queryObj)








  return(
    <>
      <div style={{padding:'40px'}}>
        <h2>{props.match.params.parameter}에 대하여</h2>
        <p style={{marginTop:'20px'}}>안녕하세요</p>
        <p style={{marginTop:'20px'}}>저는 다람쥐 헌 쳇바퀴에 타고파</p>
      </div>
      <ul>
        <li><Link to="/about/address">주소 보기</Link></li>
        <li><Link to="/about/tel">전화번호 보기</Link></li>
      </ul>
      <Route path="/about/address" component={Address}></Route>
      <Route path="/about/tel" component={Tel}></Route>
    </>
  )
}

