import React, { useState } from 'react';

export default function Hooky(){
  // const state = useState(0)
  // console.log(state)
  // const n = state[0];
  // const setN = state[1];

  const [n,setN] = useState(0);

  const plusFn = () => {
    setN(n => n + 1)
  }

  const minusFn = () => {
    setN(n => n - 1)
  }

  return(
    <div className="wrap">
    <p>
      <button onClick={minusFn}>-1</button>
      <span>{n}</span>
      <button onClick={plusFn}>+1</button>
    </p>
  </div>
  )
}

