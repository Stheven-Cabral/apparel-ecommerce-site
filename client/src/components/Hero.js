/** @jsx jsx */
import React from 'react';
import Mangoes from '../images/mango-hero-bg.png';
import MangoesMobile from '../images/mango-hero-bg-mobile.png';
import { jsx } from '@emotion/core';
import Image from 'react-bootstrap/Image';

// const heroStyle = css`
//   width: 100vw;
// `;


const Hero = () => {

  return(
    <React.Fragment>
      <Image sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px" srcSet={`${MangoesMobile} 500w, ${Mangoes} 800w`} alt="Collection of Mangoes" fluid></Image>
    </React.Fragment>
  )
}

export default Hero;