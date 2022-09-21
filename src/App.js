import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Detail from './Components/Detail';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
