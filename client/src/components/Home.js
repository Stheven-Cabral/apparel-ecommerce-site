
/** @jsx jsx */
import { jsx, css } from '@emotion/core';import React from 'react';
// import { Link } from 'react-router-dom';
// import mangologo from '../svgs/mangologo.svg';
// import mangologoOrange from '../svgs/mangologo-orange.svg';
import 'animate.css';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const containerStyles = css`
  background-color: blue;
`;

const Home = () => {
  return(
    <React.Fragment>
      <NavBar />
      <Container css={containerStyles} fluid>
        <Row>
          <Col><h1>Home</h1></Col>
          <Col><h1>History</h1></Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Home;