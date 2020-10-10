/** @jsx jsx */
import React from 'react';
import MangoesMobile from '../images/mango-hero-bg-mobile.png';
import Mangoes from '../images/mango-hero-bg.png';
import { jsx, css } from '@emotion/core';
import Image from 'react-bootstrap/Image';
import ShopButton from './ShopButton';

const containerStyle = css`
position: fixed; 
  z-index: 0;
`;


const heroStyleMobile = css`
  width: 100vw;
  padding-top: 60px;
  @media(min-width: 576px) {
    display: none;
  }
`;

const heroStyle = css`
  display: none;
  width: 100vw;
  @media(min-width: 576px) {
    display: block;
  }
`;


const Hero = () => {
  return(
    <React.Fragment>
      <div css={containerStyle}>
        <div className="position-relative">
          <Image css={heroStyleMobile} src={MangoesMobile} alt="Collection of Mangoes" fluid></Image>
          <Image css={heroStyle} src={Mangoes} alt="Collection of Mangoes" fluid></Image>
          <ShopButton text="SHOP" />
        </div>
      </div>    
    </React.Fragment>
  )
}

export default Hero;