/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export const buttonStyle = css`
  width: 175px;
  height: 55px;
  border: 4.5px solid #f3dd19;
  border-radius: 48px;
  background-color: transparent;
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.3em;
  font-weight: 100;
  letter-spacing: 6px;
  &:hover {
    background-color: #f3dd19;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 576px) {
    width: 180px;
    height: 60px;
    font-size: 1.6em;
    text-shadow: 2px 2px rgb(0,0,0, 0.5);
  }
  @media (min-width: 1200px) {
    margin: 0px 50px;
  } 
`;

const ShopButton = (props) => {
  return (
    <React.Fragment>
      <button css={buttonStyle}>{props.text}</button>
    </React.Fragment>
  )
}

export default ShopButton;