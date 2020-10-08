/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

const containerStyle = css`
  padding: 0;
`;

const navBarStyle = css`
  width: 100%;
  position: absolute;
  z-index: 1;
`;

const brandStyle = css`
  position: absolute;
  z-index: 2;
  top: 10;
  margin-left: 25%;
`;

const textStyle = css`
  line-height: 60px;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 1.2em;
  font-family: 'Kaushan Script', cursive;
  color: #f8f8f8;
`;

const navLinkClasses = `text-light`;

const mangoesStyle = css`
  color: #ffc42e;
`;


const NavigationBar = () => {
  return(
    <Container fluid css={containerStyle} className="">
      <NavBar expand="lg" bg="dark" variant="dark" css={navBarStyle} >
        <NavBar.Toggle aria-controls="basic-navbar-nav" className="" id="toggle-style"/>
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
    </Container>
  )
}

export default NavigationBar;