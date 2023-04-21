import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"
import { cards } from '../../data'
import CatCard from '../..//components/catCard/CatCard'
const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budger
            </div>
            <p>Find high-quality services at every price point.No hourly rates,just project-based pricing.</p>
            <div className="title">
    <img src="./img/check.png" alt="" />
    The best for every budger
    </div>
    <p>Find high-quality services at every price point.No hourly rates,just project-based pricing.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home