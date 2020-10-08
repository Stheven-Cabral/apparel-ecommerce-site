/** @jsx jsx */
import { jsx, css } from '@emotion/core';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'animate.css';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const containerStyle = css`
  padding: 0;
`;

const navBarStyle = css`
  width: 100%;
  position: absolute;
  z-index: 1000;
`;

// const textLinkStyle = css`
//   text-decoration: none;
//   display: flex;
//   margin-left: 20px;
//   height: 100%;
// `;

const brandStyle = css`
  position: absolute;
  z-index: 2000;
  top: 10;
  margin: 0;
  margin-left: 25%;
`;

const textStyle = css`
  margin: 0;
  height: 60px;
  line-height: 60px;
  font-size: 1.2em;
  font-family: 'Kaushan Script', cursive;
  color: #f8f8f8;
  text-align: center;
`;

const navLinkClasses = `text-light`;

const mangoesStyle = css`
  color: #ffc42e;
`;

const NavigationBar = () => {
  return(
    <Container fluid css={containerStyle} className="">
      <NavBar expand="lg" bg="dark" css={navBarStyle} >
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse>
          <Nav className="text-light">
            <Nav.Item><Nav.Link className={navLinkClasses} href="/home">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className={navLinkClasses} href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className={navLinkClasses} href="/designs">Designs</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className={navLinkClasses} href="/shop">Shop</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className={navLinkClasses} href="/contact">Contact</Nav.Link></Nav.Item>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      <div css={brandStyle}><h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1></div>

      {/* <nav className="nav-bar" css={navBarStyle}>
        <Link to="/home" css={textLinkStyle}>
          <h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1>
        </Link>
      </nav> */}
    </Container>
  )
}

export default NavigationBar;