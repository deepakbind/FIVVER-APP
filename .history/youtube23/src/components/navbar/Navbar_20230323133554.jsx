// import React from 'react'
import React, { useEffect, useState } from "react";
import "./Navbar.scss"
// import { Link, useLocation } from "react-router-dom";
const Navbar = () => {

  const [active,setActive] = useState(false);

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
    username:"deepak bind",
    isSeller:true
  }

  return (
    <div className={active ? "navbar active" : "navbar"}>
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
   {!currentUser?.isSeller &&<span>Become a Seller</span>}
    {!currentUser && <button>Join</button>}
    {currentUser && (
      <div className="user">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcutedp.in%2Fdp%2Falphabets%2Fd-name-dp-images&psig=AOvVaw0PRgJQB6e6mPm_30m0KvJv&ust=1679645151190000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIiRhO_L8f0CFQAAAAAdAAAAABAE" alt="" />
      <span>{currentUser?.username}</span>
      <div className="option">
       {
        currentUser?.isSeller && (
         <>
         <span>Gigs</span>
         <span>Add New Gig</span>
         </>
        )}
        <span>Orders</span>
        <span>Messages</span>
        <span>Logout</span>
      </div>
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