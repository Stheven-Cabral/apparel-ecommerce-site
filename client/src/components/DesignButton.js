/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export const buttonStyle = css`
  width: 175px;
  height: 55px;
  border: 4.5px solid #f3dd19;
  border-radius: 48px;
  background-color: transparent;
  margin-top: 25px;
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
  @media(min-width: 576px) {
    margin-top: 0px;
  }
`;

const DesignButton = (props) => {
  return (
    <React.Fragment>
      <button css={buttonStyle}>{props.text}</button>
    </React.Fragment>
  )
}


export default DesignButton;