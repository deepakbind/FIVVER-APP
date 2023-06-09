import React from 'react'
import './GigCard.scss'
const GigCard = ({item}) => {
  return (
    <link to ="/gig/123">
    <div className='gigCard'>
    <img src={item.img} alt="" />
    <div className="info">
    <div className="user">
    <img src={item.pp} alt="" />
    <span>{item.username}</span>
    </div>
    <p>{item.desc}</p>
    <div className="star">
    <img src={item.star} alt="" />
    <span>{item.star}</span>
    </div>
    </div>
    <div className="details">
    <img src="./img/heart.png" alt="" />
    
    </div>
    </div>
    </link>
  )
}

export default GigCard