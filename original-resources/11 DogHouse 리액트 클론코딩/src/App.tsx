import React from 'react';
import './App.scss';

import HeaderComp from './HeaderComp';
import SectionComp from './SectionComp';
import AsideComp from './AsideComp';
import FooterComp from './FooterComp';

function App() {
  return (
    <div id="wrap" style={{width:'900px',margin:'0 auto'}}>
      <HeaderComp />
      <SectionComp />
      <AsideComp />
      <FooterComp />
    </div>
  );
}

export default App;
