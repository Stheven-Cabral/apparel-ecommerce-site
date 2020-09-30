/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { Link } from 'react-router-dom';
// import 'animate.css';

const navBarStyle = css`
  height: 60px;
  background-color: rgb(24, 24, 24);
`;

const textLinkStyle = css`
  text-decoration: none;
  display: flex;
  margin-left: 20px;
  height: 100%;
`;

const textStyle = css`
  margin: 0;
  height: 60px;
  line-height: 60px;
  font-size: 1.5em;
  font-family: 'Kaushan Script', cursive;
  color: #f8f8f8;
  text-align: center;
`;

const mangoesStyle = css`
  color: #ffc42e;
`;

const NavBar = () => {
  return(
    <React.Fragment>
      <nav className="nav-bar" css={navBarStyle}>
        <Link to="/home" css={textLinkStyle}>
          <h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1>
        </Link>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;