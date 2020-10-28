/** @jsx jsx */
import React from 'react';
// import MangoesMobile from '../images/mango-hero-bg-mobile.png';
// import Mangoes from '../images/mango-hero-bg.png';
// import mangoLogoWhite from '../svgs/mangologo-white.svg';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
// import Image from 'react-bootstrap/Image';
// import ShopButton from './ShopButton';
// import DesignButton from './DesignButton';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;
`;

const titleContainer = css`
  background-color: yellow;
`;

const titleStyle = css`
  font-family: 'Bebas Neue', cursive;
`;


const About = () => {

  return(
    <React.Fragment>
      <AboutContainer>
        <div className="title-container" css={titleContainer}>
          <h1 css={titleStyle}>The Beginning</h1>
        </div>
        
        <p>Born from a passion for style, art, and urban design, Wild Mangoes was birthed in order to express ones self.</p>
      </AboutContainer>
  </React.Fragment>
  )
}

export default About;