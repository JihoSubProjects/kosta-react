import React from 'react';

export default function Member(props){
    console.log(props.match.params);
  if(props.match.params.name === undefined){
    alert('잘못된 경로로 접근하였습니다.')
    props.history.push('/')
  }

  return(
    <div style={{padding:'40px'}}>
      <p style={{marginTop:'20px'}}>{props.match.params.name}의 회원 정보</p>
    </div>
  )
}

