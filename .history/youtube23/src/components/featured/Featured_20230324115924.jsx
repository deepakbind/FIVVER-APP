import React from 'react'
import "./Featured.scss"
const Featured = () => {
  return (
    <div className='featured'>
    <div className="container">
     <div className="left">
     <h1>Find the perfect freelance services for your business</h1>
        <div className="search">
          <div className="searchInput">
          <img src="" alt="" />
          <input type="text" placeholder='Try "building mobil app"' />
          </div>
          <button>Search</button>
        </div>
        <div className="popular">
        span
        </div>
     </div>
     <div className="right">
     
     </div>
    </div>
    </div>
  );
};

export default Featured;