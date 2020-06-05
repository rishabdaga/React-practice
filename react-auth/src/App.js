import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './nav'

function App() {
  return (
    <React.Fragment>
    <Nav />
    <Route path="/" exact component={Home} />
    <Route path="/profile" component={Profile} />
    </React.Fragment>
  );
}

export default App;
