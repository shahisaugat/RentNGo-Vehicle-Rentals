import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './constant';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">RentNGo</div>
        <ul className="hidden md:flex space-x-12 justify-center flex-grow">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-lg font-semibold">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link to="/login"> <button className="text-white px-8 py-[7px] rounded-md bg-blue text-md font-semibold">Login</button></Link>
        </div>
        <div className="md:hidden text-lg">Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
