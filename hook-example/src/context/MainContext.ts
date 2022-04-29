import React from 'react';

export const MainContext = React.createContext<{ n: number, setN: (n: number) => void }>({ n: 0, setN: (n: number) => {} });