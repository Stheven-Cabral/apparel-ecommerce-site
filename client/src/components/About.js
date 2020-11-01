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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
`;

const titleContainer = css`
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
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </AboutContainer>
  </React.Fragment>
  )
}

export default About;