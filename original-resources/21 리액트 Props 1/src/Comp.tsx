import React from 'react';

interface helloParams{
  name:string
}

function Ex1Hello(props:helloParams){
  return <>
    <div style={{padding:'50px'}}>안녕하세요 {props.name}!</div>
  </>
}

Ex1Hello.defaultProps = {
  name: ''
}

export default function Comp (){
  return (
    <>
      <Ex1Hello name="react" />
      <Ex1Hello />
    </>
  )
}



