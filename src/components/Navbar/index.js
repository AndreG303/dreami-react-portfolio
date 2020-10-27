/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link className="nav-link" to="/">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>


    )
}

export default Navbar;