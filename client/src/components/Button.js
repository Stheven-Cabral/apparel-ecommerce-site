/** @jsx jsx */
import React from 'react';
// import MangoesMobile from '../images/mango-hero-bg-mobile.png';
// import Mangoes from '../images/mango-hero-bg.png';
import { jsx, css } from '@emotion/core';
// import Image from 'react-bootstrap/Image';

const buttonStyle = css`
  width: 200px;
  height: 75px;
  border: 2px solid #f3dd19;
  background-color: transparent;
  position: absolute;
`;

const Button = (props) => {
  return (
    <React.Fragment>
      <button css={buttonStyle}>{props.text}</button>
    </React.Fragment>
  )
}

export default Button;
