import React from 'react';

import Ex2Greetings from './Ex2Greetings';
import Ex2Bigcomp from './Ex2Bigcomp';
import Ex2Smallcomp from './Ex2Smallcomp';

export default function Ex02(){

  const color0 = 'LightGreen'

  return(
    <>
      <Ex2Greetings _name="리액트" addition="It's nice to see you!" clickEvent={(nm)=>{alert(nm)}}/>
      <Ex2Bigcomp>
        <Ex2Smallcomp cl='LightPink'></Ex2Smallcomp>
        <Ex2Smallcomp cl={color0}></Ex2Smallcomp>
      </Ex2Bigcomp>
    </>
  )
}
