import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Overlay from './components/Overlay';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Overlay} />
      </Switch>
    </Router>
  );
}

export default App;
