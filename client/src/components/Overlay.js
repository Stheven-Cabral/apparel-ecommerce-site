import React from 'react';
import mangologo from '../svgs/mangologo.svg';
import mangologoOrange from '../svgs/mangologo-orange.svg';
// import { jsx, css } from '@emotion/core';
import { css } from 'emotion';
import 'animate.css';

const logoContainer = css`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #F2F2F2;
  margin: 0;
`;

const mangoLogoStyle = css`
  width: 40rem;
  height: auto;
  margin-top: 55px;
  animation: bounceIn;
  animation-duration: 3s;
  position: absolute;
  z-index: 2;
`

const mangoLogoOrangeStyle = css`
  width: 40rem;
  height: auto;
  margin-top: 55px;
  animation: bounceIn;
  animation-duration: 5s;
  position: absolute;
  transform: scale(1.02);
  z-index: 1;
`
const apparelName = css`
  font-size: 6.5rem;
  font-family: 'Kaushan Script', cursive;
  margin: 0;
  padding-top: 690px;
  padding-right: 100px;
  ${'' /* top: 610px; */}
`

const apparelName2 = css`
  color: #ffc42e;
`

const Overlay = () => {
  return(
    <React.Fragment>
      <div className={logoContainer}>
        <img className={mangoLogoStyle} src={mangologo} alt="Wild Mango Logo"/>
        <img className={mangoLogoOrangeStyle} src={mangologoOrange} alt="Wild Mango Logo"/>
        <h1 className={apparelName}>Wild&nbsp;<span className={apparelName2}>&nbsp;Mangoes</span></h1>
      </div>
    </React.Fragment>
  )
}

export default Overlay;