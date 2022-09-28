// Header component
import React from 'react';
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className="py-5">
      {/* logo */}
      <img className="h-16" src={logo} alt="Bookmory Logo" />
    </header>
  )
}

export default Header;