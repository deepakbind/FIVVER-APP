import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="container">
    <div className="logo">
    <span className='text'>fiverr</span>
    <div className="dot">.</div>
    </div>
    <div className="links">
    <span>Fiverr Business</span>
    <span>Explore</span>
    <span>English</span>
    <span>Sign in</span>
    <span>Become a Seller</span>
    </div>
    </div>
    </div>
  );
};

export default Navbar;