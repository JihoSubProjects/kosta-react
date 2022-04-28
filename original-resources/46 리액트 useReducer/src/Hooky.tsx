import React, { useReducer } from 'react';

export default function Hooky(){
  const [n,dispatchN] = useReducer((current,action)=>{
    if(action.type === 'PLUS_N'){
      return current + 1;
    } else if (action.type === 'MINUS_N'){
      return current - 1;
    } else {
      return current;
    }
  }, 0);

  const plusFn = () => {
    dispatchN({type : 'PLUS_N'})
  }

  const minusFn = () => {
    dispatchN({type : 'MINUS_N'})
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

