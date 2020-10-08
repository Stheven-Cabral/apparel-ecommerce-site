/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';
import toggle from '../svgs/toggle.svg';
import 'animate.css';
// import Nav from 'react-bootstrap/Nav';

const containerStyle = css`
  padding: 0;
`;

const navBarStyle = css`
  width: 100%;
  height: 65px;
  position: absolute;
  z-index: 2;
  background-color: #1F1F1F;
`;

const brandStyle = css`
  position: absolute;
  z-index: 3;
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

const toggleStyle = css`
  background-color: #1F1F1F;
  border: none;
  height: 45px;
  width: 45px;
  transition: all .2s ease;
  &:hover,
  &:focus {
    background-color: #ffc42e;
    border: 2px solid white;
    border-radius: 10%;
    outline: 0;
  }
`;

const toggleButtonStyle = css`
  width: 25px;
  transform: scale(1.2);
`;

const navLinksStyle = css`
  width: 100%;
  height: 200px;
  padding-top: 50px;
  background-color: #1F1F1F;
  position: absolute;
  left: 0px; 
  top: 50px;
  animation: slideInLeft;
  animation-duration: 1s;
  z-index: 1;
`;

const listStyle = css`
  list-style: none;
  padding: 0px;
`;

const linkStyle = css`
  font-family: 'Bebas Neue', cursive;
  padding: 2.5px 0px;
  color: white;
`;

const mangoesStyle = css`
  color: #ffc42e;
`;


const NavigationBar = () => {
  return(
    <Container fluid css={containerStyle} className="">
      <NavBar variant="dark" css={navBarStyle} >
        <button css={toggleStyle}><img css={toggleButtonStyle} src={toggle} alt="toggle button"/></button>
        <div css={navLinksStyle}>
          <ul css={listStyle}>
            <li className="text-center"><Link css={linkStyle}>HOME</Link></li>
            <li className="text-center"><Link css={linkStyle}>ABOUT</Link></li>
            <li className="text-center"><Link css={linkStyle}>DESIGNS</Link></li>
            <li className="text-center"><Link css={linkStyle}>SHOP</Link></li>
          </ul>
        </div>
      </NavBar>
      <div css={brandStyle}><h1 css={textStyle}>Wild<span css={mangoesStyle}>&nbsp;Mangoes</span></h1></div>
    </Container>
  )
}

export default NavigationBar;