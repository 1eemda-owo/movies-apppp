import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Detail from './Components/Detail';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/detail/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
