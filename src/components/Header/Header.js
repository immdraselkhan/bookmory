// Header component
import React from 'react';
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className="py-10">
      <div className="block md:flex items-end gap-10">
        {/* logo */}
        <img className="h-16" src={logo} alt="Bookmory Logo" />
        {/* titiel */}
        <h2 className="text-2xl py-5 col-span-1 md:col-span-2 lg:col-span-3">Select books that you want to read</h2>
      </div>
    </header>
  )
}

export default Header;