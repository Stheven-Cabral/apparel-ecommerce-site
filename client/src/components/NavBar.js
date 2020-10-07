/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
// import { Link } from 'react-router-dom';
// import 'animate.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const navBarStyle = css`
//   height: 60px;
//   background-color: rgb(24, 24, 24);
// `;

// const textLinkStyle = css`
//   text-decoration: none;
//   display: flex;
//   margin-left: 20px;
//   height: 100%;
// `;

const textStyle = css`
  margin: 0;
  height: 60px;
  line-height: 60px;
  font-size: 1.2em;
  font-family: 'Kaushan Script', cursive;
  color: #f8f8f8;
  text-align: center;
`;

const mangoesStyle = css`
  color: #ffc42e;
`;

const NavigationBar = () => {
  return(
    <React.Fragment>
      <Nav></Nav>
      <NavBar bg="dark">
        <NavBar.Brand><h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1></NavBar.Brand>
      </NavBar>

      {/* <nav className="nav-bar" css={navBarStyle}>
        <Link to="/home" css={textLinkStyle}>
          <h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1>
        </Link>
      </nav> */}
    </React.Fragment>
  )
}

export default NavigationBar;