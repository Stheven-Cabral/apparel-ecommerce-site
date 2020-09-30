import React from 'react';
// import { Link } from 'react-router-dom';
// import mangologo from '../svgs/mangologo.svg';
// import mangologoOrange from '../svgs/mangologo-orange.svg';
// import { css } from 'emotion';
import 'animate.css';
import NavBar from './NavBar';

const Home = () => {
  return(
    <React.Fragment>
      <NavBar />
      <div>
        <h1>Home</h1>
      </div>
    </React.Fragment>
  )
}

export default Home;