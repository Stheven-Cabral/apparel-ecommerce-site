/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { Link } from 'react-router-dom';
import mangologowhite from '../svgs/mangologo.svg';
// import 'animate.css';

const logoStyle = css`
  width: 50px;
  height: 50px;
  background-color: #ffc42e;
`;

const navBarStyle = css`
  height: 60px;
  background-color: rgb(24, 24, 24);
`;

const logoTextStyle = css`
  text-decoration: none;
  display: flex;
  margin-left: 20px;
  height: 100%;
`;

const mangoesStyle = css`
  color: #ffc42e;
`;

const NavBar = () => {
  return(
    <React.Fragment>
      <nav className="nav-bar" css={navBarStyle}>
        <Link to="/home" css={logoTextStyle}>
          <h1>Wild<img src={mangologowhite} css={logoStyle} alt='Mango Logo'/><span css={mangoesStyle}>&nbsp;Mangoes</span></h1>
        </Link>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;