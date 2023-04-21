import React from 'react'
import "./Gigs.scss"
const Gigs = () => {
  return (
    <div className='gigs'>
      <div className="container">
      <span className='breadcrumbs'>FIVERR GRAPHICS & DESIGN</span>
      <h1>AI Artists</h1>
      <p>
      Explore the boundaries of art and technology with Fiverr's AI artists
      </p>
      <div className="menu">
      <div className="left">
      <span>Budged</span>
      <input type="text" placeholder='min'/>
      <input type="text" placeholder='max'/>
      <button></button>
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default Gigs