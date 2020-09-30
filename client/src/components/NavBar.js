/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import { Link } from 'react-router-dom';
// import mangologo from '../svgs/mangologo.svg';
// import 'animate.css';

const NavBar = () => {
  return(
    <React.Fragment>
      <div className="home-header">
        <nav className="nav-bar">
          <Link to="/home">
            <h1>Wild Mangoes</h1>
          </Link>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default NavBar;