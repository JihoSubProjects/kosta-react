import React from 'react';

export default function Home(){
  const pStyle = {marginTop:'20px'}

  return(
    <div style={{padding:'40px'}}>
      <h2>리액트 Hook 예제</h2>
      <p style={pStyle}>클래스형 컴포넌트는 기존 클래스 예제를</p>
      <p style={pStyle}>함수형 컴포넌트는 Hook 예제를 담고 있습니다.</p>
    </div>
  )
}

