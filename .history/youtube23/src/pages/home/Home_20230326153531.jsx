import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
    <Featured/>
    <TrustedBy/>
    <Slide>
    {cards.map(card)}
    </Slide>
    </div>
  )
}

export default Home