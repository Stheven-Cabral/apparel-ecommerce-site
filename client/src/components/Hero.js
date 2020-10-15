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
  padding-top: 65px;
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
  width: 93%;
  position: absolute;
  top: 14%;
  left: 52%;
  transform: translate(-50%);
`;

const heroTextContainerStyle = css`
  position: absolute;
  width: 300px;
  top: 64%;
  left: 50%;
  transform: translate(-50%);
  color: white;
`;

const heroTextStyle = css`
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.3em;
  font-weight: 100;
  letter-spacing: 6px;
  text-align: center;
  line-height: 
`;

const mangoTextStyle = css`
  font-family: 'Kaushan Script', cursive;
  color: #f3dd19;
`;

const Hero = () => {
  return(
    <React.Fragment>
      <div css={containerStyle} className="position-relative">
        <Image css={heroStyleMobile} src={MangoesMobile} alt="Collection of Mangoes" fluid></Image>
        <Image css={heroStyle} src={Mangoes} alt="Collection of Mangoes" fluid></Image>
        <Image css={logoStyle} src={mangoLogoWhite} alt="White Wild Mangoes Logo" fluid></Image>
        <div css={heroTextContainerStyle}>
          <p className="text-white" css={heroTextStyle}>SWEET LOOKING SHIRTS WITH A <span css={mangoTextStyle}>wild</span> TWIST</p>
        </div>
        <ShopButton text="SHOP" />
        <DesignButton text="DESIGNS" />
      </div>
    </React.Fragment>
  )
}

export default Hero;