import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './scss/App.scss';
import Header from './Header';
import WikiPage from './WikiPage'
import Error404 from './Error404'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={WikiPage} />
          <Route path="/w/:pageName" component={WikiPage} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

