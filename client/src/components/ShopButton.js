/** @jsx jsx */
import React from 'react';
// import MangoesMobile from '../images/mango-hero-bg-mobile.png';
// import Mangoes from '../images/mango-hero-bg.png';
import { jsx, css } from '@emotion/core';
// import Image from 'react-bootstrap/Image';

export const buttonStyle = css`
  width: 180px;
  height: 75px;
  border: 2px solid #f3dd19;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const ShopButton = (props) => {
  return (
    <React.Fragment>
      <button css={buttonStyle}>{props.text}</button>
    </React.Fragment>
  )
}

// export const designButton = (props) => {
//   return (
//     <React.Fragment>
//       <button css={buttonStyle}>{props.text}</button>
//     </React.Fragment>
//   )
// }


export default ShopButton;