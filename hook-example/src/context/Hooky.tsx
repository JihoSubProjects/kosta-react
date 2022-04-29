import React, { useState } from 'react';
import {MainContext} from './MainContext';
import HookyMiddle from './HookyChildren'

export default function Hooky(){
  const [n, setN] = useState(0);
  const state = {n, setN}

  return(
    <div className="wrap">
    <p>
      <MainContext.Provider value={state}>
        <HookyMiddle />
      </MainContext.Provider>
    </p>
  </div>
  )
}

