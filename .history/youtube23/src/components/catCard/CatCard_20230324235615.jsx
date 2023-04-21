import React from 'react'
import "./CatCard.scss"
const CatCard = ({item}) => {
  return (
    <Link to="/gig/123">
    <div className='catCard'>
   <img src={item.img} alt="" />
   <span>{item.desc</span>
    </div>
    </Link>
  );
};

export default CatCard;