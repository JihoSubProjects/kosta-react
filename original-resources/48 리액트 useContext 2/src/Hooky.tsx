import React from 'react';
import HookyMainContext from './HookyMainContext';
import HookyMiddle from './HookyChildren'

export default function Hooky(){

  return(
    <div className="wrap">
    <p>
      <HookyMainContext>
        <HookyMiddle />
      </HookyMainContext>
    </p>
  </div>
  )
}

