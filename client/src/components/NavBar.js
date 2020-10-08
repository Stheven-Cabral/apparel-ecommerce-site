/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
// import { Link } from 'react-router-dom';
// import 'animate.css';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

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

const mangoesStyle = css`
  color: #ffc42e;
`;

const NavigationBar = () => {
  return(
    <React.Fragment>
      <Container>
        <NavBar expand="md" bg="dark" css={navBarStyle}>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse>
            <Nav as="ul">
              <Nav.Item as="li"><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
              <Nav.Item as="li"><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              <Nav.Item as="li"><Nav.Link href="/designs">Designs</Nav.Link></Nav.Item>
              <Nav.Item as="li"><Nav.Link href="/shop">Shop</Nav.Link></Nav.Item>
              <Nav.Item as="li"><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
        <div css={brandStyle}><h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1></div>
      </Container>

      {/* <nav className="nav-bar" css={navBarStyle}>
        <Link to="/home" css={textLinkStyle}>
          <h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1>
        </Link>
      </nav> */}
    </React.Fragment>
  )
}

export default NavigationBar;