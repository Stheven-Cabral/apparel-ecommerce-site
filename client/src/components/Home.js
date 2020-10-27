
/** @jsx jsx */
import { jsx } from '@emotion/core';import React from 'react';
// import { Link } from 'react-router-dom';
// import mangologo from '../svgs/mangologo.svg';
// import mangologoOrange from '../svgs/mangologo-orange.svg';
import 'animate.css';
import NavigationBar from './NavBar';
import Hero from './Hero';
import About from './About';
// import Container from 'react-bootstrap/Container';


// const containerStyles = css`
//   background-color: blue;
// `;

const Home = () => {
  return(
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <About />
    </React.Fragment>
  )
}

export default Home;