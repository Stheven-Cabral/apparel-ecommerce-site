/** @jsx jsx */
import React from 'react';
import Mangoes from '../images/mango-hero-bg.png';
import { jsx, css } from '@emotion/core';

const heroStyle = css`
  width: 100vw;
`;


const Hero = () => {

  return(
    <React.Fragment>
      <img src={Mangoes} alt="Collection of Mangoes" css={heroStyle}></img>
    </React.Fragment>
  )
}

export default Hero;