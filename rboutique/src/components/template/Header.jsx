import React from 'react';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
      <div className="header">
          <div className="logo-ctr">
              <img src={ Logo } alt=""/>
          </div>
          <div className="navbar">
              <ul>
                  <li><a href="#">Welcome</a></li>
                  <li><a href="#">Our Macarons</a></li>
                  <li><a href="#">Gifts & Parties</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>
      </div>
    );
};

export default Navbar;