import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="ui top inverted menu">
      <div className="ui container">
        <a className="header item" href="/">
          <i className="large github icon" /> Github Finder
        </a>
        <div className="right menu">
          <Link to="/" className="header item">
            {' '}
            <i className="home icon" /> Home
          </Link>{' '}
          <Link to="/about" className="header item">
            <i className="info icon" /> About
          </Link>{' '}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
