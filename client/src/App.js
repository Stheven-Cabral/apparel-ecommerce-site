import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Overlay from './components/Overlay';
import Home from './components/Home';
import './index.css';
import Normalize from 'react-normalize';
import { Provider } from './Context';

function App() {
  return (
    <Provider>
      <Router>
        <Normalize />
        <Switch>
          <Route exact path="/" component={Overlay} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
