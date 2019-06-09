import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="ui top inverted menu">
      <div className="ui container">
        {' '}
        <Link to="/" className="header item">
          {' '}
          <i className="home icon" /> Home
        </Link>{' '}
        <Link to="/about" className="item">
          <i className="info icon" /> About
        </Link>{' '}
      </div>
    </div>
  );
};

export default NavBar;
