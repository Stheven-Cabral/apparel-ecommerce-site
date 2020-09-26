import React from 'react';
import mangologo from '../svgs/mangologo.svg';
import { css } from 'emotion';

const overlayContainer = css`
  display: flex;
  justify-content: center;
`;

const mangoLogoStyle = css`
  width: 30em;
  height: auto;
  margin-top: 5em;
`

const Overlay = () => {
  return(
    <div className={overlayContainer}>
      <img className={mangoLogoStyle} src={mangologo} alt="Wild Mango Logo"/>
    </div>
  )
}

export default Overlay;