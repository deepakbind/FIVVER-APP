import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.scss"
const Card = ({item}) => {
  return (
    <Link to="/gig?cat=design">
    <div className='Card'>
   <img src={item.img} alt="" />
   <span className='desc'>{item.desc}</span>
   <span className='title'>{item.title}</span>
    </div>
    </Link>
  );

export default Card;