import React from 'react'
import "./Navbar.scss"
import React, {useState} from
// import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active,setActive] = useState(false);
  return (
    <div className='navbar'>
    <div className="container">
    <div className="logo">
    {/*<Link to="/">*/}
    <span className='text'>fiverr</span>
   {/*</Link>*/}
    <span className='dot'>.</span>
    </div>
    <div className="links">
    <span>Fiverr Business</span>
    <span>Explore</span>
    <span>English</span>
    <span>Sign in</span>
    <span>Become a Seller</span>
    <button>Join</button>
    </div>

    </div>
    <hr/>
    <div className="menu">
    <span>Test</span>
    <span>Test2</span>
    </div>
    </div>
  )
}

export default Navbar