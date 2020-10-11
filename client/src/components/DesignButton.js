/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export const buttonStyle = css`
  width: 180px;
  height: 75px;
  border: 5px solid #f3dd19;
  border-radius: 48px;
  background-color: transparent;
  position: absolute;
  top: 83%;
  left: 50%;
  transform: translate(-50%);
`;

const DesignButton = (props) => {
  return (
    <React.Fragment>
      <button css={buttonStyle}>{props.text}</button>
    </React.Fragment>
  )
}


export default DesignButton;