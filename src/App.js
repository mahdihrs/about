import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/landing-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
