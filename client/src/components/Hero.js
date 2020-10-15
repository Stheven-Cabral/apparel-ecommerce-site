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
  padding-top: 64px;
  @media(min-width: 576px) {
    display: block;
  }
`;

const logoStyle = css`
  width: 365px;
  position: absolute;
  top: 14%;
  left: 52%;
  transform: translate(-50%);
  @media (min-width: 576px) {
    display: none;
  }
`;

const buttonsContainerStyle = css`
  text-decoration: none;
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    top: 63%;
    width:  65%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const heroTextContainerStyle = css`
  position: absolute;
  width: 300px;
  top: 64%;
  left: 50%;
  transform: translate(-50%);
  color: white;
  @media (min-width: 576px) {
    top: 37%;
    width: 90%;
  }
`;

const heroTextStyle = css`
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.3em;
  font-weight: 100;
  letter-spacing: 6px;
  text-align: center;
  line-height: 30px;
  @media (min-width: 576px) {
    font-size: 2em;
    text-shadow: 2px 2px rgb(0,0,0, 0.5);
  } 
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
        <div css={buttonsContainerStyle}>
          <ShopButton text="SHOP" />
          <DesignButton text="DESIGNS" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero;