import React from 'react';
import './scss/App.scss';

import HeaderComp from './tsx/HeaderComp';
import SectionComp1 from './tsx/SectionComp1';
import SectionComp2 from './tsx/SectionComp2';
import SectionComp3 from './tsx/SectionComp3';
import SectionComp4 from './tsx/SectionComp4';
import FooterComp from './tsx/FooterComp';

function App() {
  return (
    <>
      <HeaderComp />
      <SectionComp1 />
      <SectionComp2 />
      <SectionComp3 />
      <SectionComp4 />
      <FooterComp />
    </>
  );
}

export default App;
