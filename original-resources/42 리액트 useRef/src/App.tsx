import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/App.scss';

import Navigator from './Navigator';
import Home from './Home';
import Classy from './Classy';
import Hooky from './Hooky';
import Error404 from './Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/classy" component={Classy} />
          <Route exact path="/hooky" component={Hooky} />
          <Route component={Error404}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

