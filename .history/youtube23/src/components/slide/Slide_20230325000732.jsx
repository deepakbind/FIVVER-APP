import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
const Slide = () => {
  return (
    <div className='slide'>
    <div className="container">
    <Slider>
   {cards.map(card=>{
    <CatCard item=
   })}
  </Slider>
    </div>
    </div>
  );
};

export default Slide;