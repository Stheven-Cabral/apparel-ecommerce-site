/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import toggle from '../svgs/toggle.svg';
import shoppingCart from '../svgs/shopping-cart.svg';


/** Navigation Bar Component Styling */
const containerStyle = css`
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const navBarStyle = css`
  width: 100%;
  height: 66px;
  position: absolute;
  z-index: 2;
  background-color: #1F1F1F;
  @media(min-width: 992px) {
    height: 70px;
  }  
`;

const brandStyle = css`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-60%);
  @media(min-width: 992px) {
    display: none;
  }
`;

const brandTextStyle = css`
  line-height: 60px;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 1.7em;
  font-family: 'Kaushan Script', cursive;
  color: #f8f8f8;
  @media (min-width: 768px) {
    font-size: 1.9em;
  }
  @media(min-width: 992px) {
    line-height: 70px;
    padding-left: 10px;
  } 
`;

const mangoesTextStyle = css`
  color: #f3dd19;
`;

const toggleStyle = css`
  background-color: #1F1F1F;
  border: none;
  height: 45px;
  width: 45px;
  transition: all .2s ease;
  &:hover {
    background-color: #f3dd19;
    border: 2px solid #1F1F1F;
    border-radius: 10%;
  }
  &:focus {
    outline: none;
  }
  @media(min-width: 992px) {
    display: none;
  }
`;

const toggleButtonStyle = css`
  width: 25px;
  transform: scale(1.2);
`;

const NavLinksContainer = styled.div`
  width: 100%;
  height: 225px;
  padding-top: 50px;
  background-color: #1F1F1F;
  position: absolute;
  left: 0px; 
  top: 60px;
  transform: ${({visibleNav}) => visibleNav ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform .3s ease;
  @media (min-width: 768px) {
    height: 275px;
  }
  @media(min-width: 992px) {
    height: 65px;
    left: 0px;
    top: 0px;
    transform: translateX(0%);
  }
`;

const UnorderedList = styled.ul`
  display: ${({visibleNav}) => visibleNav ? 'block' : 'none'};
  list-style: none;
  padding: 0px;
  @media (min-width: 992px) {
    position: absolute;
    top: 22px;
    background-color: transparent;
  }
  @media (min-width: 1200px) {
    padding-left: 45px;
  }
`;

const linkStyle = css`
  font-family: 'Bebas Neue', cursive;
  padding: 2px 0px;
  color: white;
  &:hover {
    color: #f3dd19;
  }
  @media (min-width: 768px) {
    font-size: 1.5em;
    font-weight: 200px;
  } 
  @media (min-width: 992px) {
    font-size: 1.1em;
    font-weight: 100px;
    padding-top: 6px;
  }
  @media (min-width: 1200px) {
    font-size: 1.2em;
  }
`;

const shoppingCartButtonStyle = css`
  background-color: transparent;
  border: none;
  height: 55px;
  width: 55px;
  position: absolute;
  z-index: 4;
  right: 17px;
  top: 5px;
  @media (min-width: 992px) {
    margin-right: 10px;
    height: 65px;
  }
  @media (min-width: 1200px) {
    margin-right: 50px;
    width: 60px;
  }
`;

/**Navigation Bar Component */
const NavigationBar = () => {
  const [visibleNav, setNavVisible] = useState(false);

  return(
    <Container fluid css={containerStyle} >
      <NavBar variant="dark" css={navBarStyle} >
        <button css={toggleStyle} onClick={toggleNavVisibility}><img css={toggleButtonStyle} src={toggle} alt="toggle button"/></button>
        <NavLinksContainer visibleNav={visibleNav}>
          <UnorderedList visibleNav={visibleNav} className="d-lg-flex">
            <li className="h5 text-center text-lg-left mx-lg-3"><Link css={linkStyle}>HOME</Link></li>
            <li className="h5 text-center text-lg-left mx-lg-3"><Link css={linkStyle}>ABOUT</Link></li>
            <li className="h5 text-center text-lg-left mx-lg-3"><Link css={linkStyle}>DESIGNS</Link></li>
            <li className="h5 text-center text-lg-left mx-lg-3"><Link css={linkStyle}>SHOP</Link></li>
          </UnorderedList>
        </NavLinksContainer>
      </NavBar>
      <div css={brandStyle}>
        <h1 css={brandTextStyle}>Wild<span css={mangoesTextStyle}>&nbsp;Mangoes</span></h1>
      </div>
      <button css={shoppingCartButtonStyle}><img src={shoppingCart} alt="Shopping Cart"/></button>
    </Container>
  )

  function toggleNavVisibility() {
    if (visibleNav === false) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  }
}

export default NavigationBar;