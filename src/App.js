import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Portfolios from './pages/portfolios';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/portfolios" exact component={Portfolios} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
