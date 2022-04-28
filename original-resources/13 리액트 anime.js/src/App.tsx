import React from 'react';
import './App.scss';
import anime from 'animejs/lib/anime.es.js';

const App = () => {

  const clickAction = function(i){
    anime({
      targets: 'html',
      scrollTop: i*900,
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }

  return (
    <>
      <header>
        <ul id="f_btn">
          <li><a href="" onClick={function(e){e.preventDefault();clickAction(0)}}>1번</a></li>
          <li><a href="#" onClick={function(e){e.preventDefault();clickAction(1)}}>2번</a></li>
          <li><a href="#" onClick={function(e){e.preventDefault();clickAction(2)}}>3번</a></li>
          <li><a href="#" onClick={function(e){e.preventDefault();clickAction(3)}}>4번</a></li>
          <li><a href="#" onClick={function(e){e.preventDefault();clickAction(4)}}>5번</a></li>
        </ul>
      </header>
      <section>
        <article className="art1">첫번째</article>
        <article className="art2">두번째</article>
        <article className="art3">세번째</article>
        <article className="art4">네번째</article>
        <article className="art5">다섯번째</article>
      </section>
    </>
  )
}

export default App;
