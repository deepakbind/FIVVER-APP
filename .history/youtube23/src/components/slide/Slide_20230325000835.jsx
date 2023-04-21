import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import { Cards } from '../../data';
const Slide = () => {
  return (
    <div className='slide'>
    <div className="container">
    <Slider>
   {cards.map(card=>{
    <CatCard item={card}/>
   })}
  </Slider>
    </div>
    </div>
  );
};

export default Slide;