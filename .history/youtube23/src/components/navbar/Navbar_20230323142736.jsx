// import React from 'react'
import React, { useEffect, useState } from "react";
import "./Navbar.scss"
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {

  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false);
  
  const {pathname} = useLocation()

  const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) :setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  },[]);

  const currentUser= {
    id:1,
    username:"Charu Bind",
    isSeller:true
  }

  return (
    <div className={active || pathname? "navbar active" : "navbar"}>
    <div className="container">
    <div className="logo">
    <Link to="/" className="link">
    <span className='text'>fiverr</span>
   </Link>
    <span className='dot'>.</span>
    </div>
    <div className="links">
    <span>Fiverr Business</span>
    <span>Explore</span>
    <span>English</span>
    <span>Sign in</span>
   {!currentUser?.isSeller &&<span>Become a Seller</span>}
    {!currentUser && <button>Join</button>}
    {currentUser && (
      <div className="user" onClick={()=>setOpen(!open)}>
      <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      <span>{currentUser?.username}</span>
      {open && <div className="options">
       {
        currentUser?.isSeller && (
         <>
         <Link className="link" to="/mygigs">Gigs</Link>
         <Link className="link" to="/add">Add New Gig</Link>
         </>
        )}
        <Link className="link" to="/orders">Orders</Link>
        <Link className="link" to="/messages">Messages</Link>
        <Link className="link" to="/">Logout</Link>
      </div>}
      </div>
    )}
    </div>
    </div>
   {active && (
    <>
    <hr />
    <div className="menu">
    <span>Test</span>
    <span>Test2</span>
    </div>
    </>
  )}
    </div>
  );
};

export default Navbar