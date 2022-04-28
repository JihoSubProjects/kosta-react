import React, { useContext } from 'react';
import {MainContext} from './MainContext';

function HookyLeft(){
  const context = useContext(MainContext)
  const minusFn = () => {
    context.setN(current => (current - 1))
  }

  return (
    <button onClick={minusFn}>-1</button>
  )
}



function HookyRight(){
  const context = useContext(MainContext)
  const plusFn = () => {
    context.setN(current => (current + 1))
  }

  return (
    <button onClick={plusFn}>+1</button>
  )
}





function HookyCircle(){
  const context = useContext(MainContext)
  return (
    <span>{context.n}</span>
  )
}





export default function HookyMiddle(){
  return (
    <>
      <HookyLeft />
      <HookyCircle />
      <HookyRight />
    </>
  )
}

