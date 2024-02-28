// Header.js

import React from 'react';
import './main.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    
        <a>Categories</a>
        <a>Website builder's</a>
        <a>Todays deal</a>
 
    </header>
  );
}

export default Header;
