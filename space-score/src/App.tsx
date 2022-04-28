import React from 'react';
import logo from './logo.svg';
import './App.css';

import Container from './Container';
import ScoreTable from './ScoreTable';

const yourname = prompt('이름을 입력해주세요');

function App() {
  return (
    <>
      <Container>
        <ScoreTable yourname={yourname} />
      </Container>
    </>
  );
}

export default App;
