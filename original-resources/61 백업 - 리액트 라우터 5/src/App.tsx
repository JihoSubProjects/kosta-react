import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/App.scss';

import Navigator from './Navigator';
import Home from './Home';
import About from './About';
import Member from './Member';
import Error404 from './Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:parameter" component={About} />
          <Route exact path="/member" component={Member} />
          <Route path="/member/:name" component={Member} />
          <Route component={Error404}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

