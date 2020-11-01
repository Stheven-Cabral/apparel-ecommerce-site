/** @jsx jsx */
import React from 'react';
// import MangoesMobile from '../images/mango-hero-bg-mobile.png';
// import Mangoes from '../images/mango-hero-bg.png';
// import mangoLogoWhite from '../svgs/mangologo-white.svg';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import MangoesPattern from '../images/mango-silhouette-pattern.png';
// import Image from 'react-bootstrap/Image';
// import ShopButton from './ShopButton';
// import DesignButton from './DesignButton';

const AboutContainer = styled.div`
  background-image: url(${MangoesPattern});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  padding: 50px 0px;
`;

const titleContainer = css`
  ${'' /* background-color: #f3dd19; */}
  height: 60px;
  
`;

const titleStyle = css`
  font-family: 'Kaushan Script', cursive;
  font-size: 1.75em;
  margin: 2px 10px;
  line-height: 60px;
  text-decoration: underline;
  text-decoration-color: #f3dd19;
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