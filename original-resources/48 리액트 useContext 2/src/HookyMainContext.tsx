import React, { useState } from 'react';

export const HookyMainContext = React.createContext(null);

export default function HookyContextProvider({children}){
  const [n, setN] = useState(0);
  const state = {n, setN}

  return (
    <HookyMainContext.Provider value={state}>
      {children}
    </HookyMainContext.Provider >
  )
}