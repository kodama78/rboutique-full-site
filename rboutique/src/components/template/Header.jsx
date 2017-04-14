import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
      <div className="header">
          <div className="logo-ctr">
              <img src={ Logo } alt=""/>
          </div>
          <div className="navbar">
              <ul>
                  <li><Link to="/welcome">Welcome</Link></li>
                  <li><Link to="/our_macarons">Our Macarons</Link></li>
                  <li><Link to="/gifts_parties">Gifts & Parties</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </div>
      </div>
    );
};

export default Header;