import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Overlay from './components/Overlay';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Overlay} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
