/** @jsx jsx */
import React from 'react';
import MangoesMobile from '../images/mango-hero-bg-mobile.png';
import Mangoes from '../images/mango-hero-bg.png';
import mangoLogoWhite from '../svgs/mangologo-white.svg';
import { jsx, css } from '@emotion/core';
import Image from 'react-bootstrap/Image';
import ShopButton from './ShopButton';
import DesignButton from './DesignButton';

const containerStyle = css`
  z-index: 0;
`;


const heroStyleMobile = css`
  width: 100vw;
  padding-top: 40px;
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

const logoStyle = css`
  width: 250px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
`;


const Hero = () => {
  return(
    <React.Fragment>
      <div css={containerStyle} className="position-relative">
        <Image css={heroStyleMobile} src={MangoesMobile} alt="Collection of Mangoes" fluid></Image>
        <Image css={heroStyle} src={Mangoes} alt="Collection of Mangoes" fluid></Image>
        <Image css={logoStyle} src={mangoLogoWhite} alt="White Wild Mangoes Logo" fluid></Image>
        <p></p>
        <ShopButton text="SHOP" />
        <DesignButton text="DESIGNS" />
      </div>
    </React.Fragment>
  )
}

export default Hero;