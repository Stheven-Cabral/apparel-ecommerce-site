/** @jsx jsx */
import React from 'react';
import MangoesMobile from '../images/mango-hero-bg-mobile.png';
import Mangoes from '../images/mango-hero-bg.png';
import mangoLogoWhite from '../svgs/mangologo-white.svg';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
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
    width: 65%;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 992px) {
    top: 73%;
  }
`;

const HeroTextContainer = styled.div`
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
  @media (min-width: 768px) {
    width: 75%;
  }
  @media (min-width: 992px) {
    top: 55%;
  }
`;

const HeroText = styled.p`
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
  @media (min-width: 768px) {
    font-size: 2.5em;
    text-shadow: 2px 2px rgb(0,0,0, 0.5);
    line-height: 40px;
  }  
`;

const mangoTextStyle = css`
  font-family: 'Kaushan Script', cursive;
  color: #f3dd19;
`;

const LogoContainer = styled(HeroTextContainer)`
  display: none;
  font-size: 2em;
  @media (min-width: 992px) {
    display: block;
    top: 25%;
  }
`;

const Logo = styled(HeroText)`
  text-shadow: 2px 2px 2px black;
  font-family: 'Kaushan Script', cursive;
`;

const Hero = () => {
  return(
    <React.Fragment>
      <div css={containerStyle} className="position-relative">
        <Image css={heroStyleMobile} src={MangoesMobile} alt="Collection of Mangoes" fluid></Image>
        <Image css={heroStyle} src={Mangoes} alt="Collection of Mangoes" fluid></Image>
        <Image css={logoStyle} src={mangoLogoWhite} alt="White Wild Mangoes Logo" fluid></Image>
        <LogoContainer>
          <Logo className="text-white">Wild <span css={mangoTextStyle}>Mangoes</span></Logo>
        </LogoContainer>
        <HeroTextContainer>
          <HeroText className="text-white">SWEET LOOKING SHIRTS WITH A <span css={mangoTextStyle}>wild</span> TWIST</HeroText>
        </HeroTextContainer>
        <div css={buttonsContainerStyle}>
          <ShopButton text="SHOP" />
          <DesignButton text="DESIGNS" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero;