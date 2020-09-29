import React from 'react';
import { Link } from 'react-router-dom';
import mangologo from '../svgs/mangologo.svg';
import mangologoOrange from '../svgs/mangologo-orange.svg';
import { css } from 'emotion';
import 'animate.css';

const logoContainer = css`
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  margin: 0;
  height: 100vh;
`;

const mangoLogoStyle = css`
  width: 40rem;
  height: auto;
  margin-top: 55px;
  padding-left: 15px;
  animation: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  position: absolute;
  z-index: 2;
`

const mangoLogoOrangeStyle = css`
  width: 40rem;
  height: auto;
  margin-top: 55px;
  padding-left: 15px;
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
`

const apparelName2 = css`
  color: #ffc42e;
`

const Overlay = () => {
  return(
    <React.Fragment>
      <div className={logoContainer}>
        <Link to='/home'><img className={mangoLogoStyle} src={mangologo} alt="Wild Mango Logo"/></Link>
        <Link to='/home'><img className={mangoLogoOrangeStyle} src={mangologoOrange} alt="Wild Mango Logo"/></Link>
        <h1 className={apparelName}>Wild&nbsp;<span className={apparelName2}>&nbsp;Mangoes</span></h1>
      </div>
    </React.Fragment>
  )
}

export default Overlay;