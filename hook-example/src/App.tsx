import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Classy from './Classy';
import Hooky from './Hooky';
import Navigator from './Navigator';
import Error404 from './original/Error404';
import Home from './original/Home';

import VideoClassy from './video/Classy';
import VideoHooky from './video/Hooky';
import CrudClassy from './crud/Classy';
import CrudHooky from './crud/Hooky';
import EffectClassy from './effect/Classy';
import EffectHooky from './effect/Hooky';
import MemoClassy from './memo/Classy';
import MemoHooky from './memo/Hooky';

function App() {
  return <BrowserRouter>
    <Navigator />
    <main style={{ paddingTop: '20px' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/classy' element={<Classy />} />
        <Route path='/hooky' element={<Hooky />} />
        <Route path='/video-classy' element={<VideoClassy />} />
        <Route path='/video-hooky' element={<VideoHooky />} />
        <Route path='/crud-classy' element={<CrudClassy />} />
        <Route path='/crud-hooky' element={<CrudHooky />} />
        <Route path='/effect-classy' element={<EffectClassy />} />
        <Route path='/effect-hooky' element={<EffectHooky />} />
        <Route path='/memo-classy' element={<MemoClassy />} />
        <Route path='/memo-hooky' element={<MemoHooky />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </main>
  </BrowserRouter>
}

export default App;
