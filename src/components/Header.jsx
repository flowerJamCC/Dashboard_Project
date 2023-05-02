import React from 'react';
import './header.css';

const Header = ({ title }) => {
  return (
    <div className='header-container'>
        <p className='header-title'>{title}</p>
    </div>
  )
}

export default Header;