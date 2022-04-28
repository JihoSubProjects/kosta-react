import React, { useContext } from 'react';
import {HookyMainContext} from './HookyMainContext';

function HookyLeft(){
  const context = useContext(HookyMainContext)
  const minusFn = () => {
    context.setN(current => (current - 1))
  }

  return (
    <button onClick={minusFn}>-1</button>
  )
}



function HookyRight(){
  const context = useContext(HookyMainContext)
  const plusFn = () => {
    context.setN(current => (current + 1))
  }

  return (
    <button onClick={plusFn}>+1</button>
  )
}





function HookyCircle(){
  const context = useContext(HookyMainContext)
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

