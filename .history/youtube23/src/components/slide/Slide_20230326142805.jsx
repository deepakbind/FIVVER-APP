import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
// import AwesomeSlider from 'react-awesome-slider';
import CatCard from '../catCard/CatCard';
import { cards } from '../../data';
const Slide = () => {
  return (
    <div className='slide'>
    <div className="container">
    <AwesomeSlider>
   {cards.map(card=>{
    <CatCard item={card} key={card.id}/>
   })}
  </AwesomeSlider>
    </div>
    </div>
  );
};

export default Slide;