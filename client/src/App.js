import React from 'react';
import logo from './svgs/logo.svg';
import mangologo from './svgs/mangologo.svg';

function App() {
  return (
    <div className="App">
      <h1>WILD MANGOES</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={mangologo} className="apparel-logo" alt="apparel-logo" />
    </div>
  );
}

export default App;
