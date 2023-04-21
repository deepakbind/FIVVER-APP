import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import "./Gig.scss"
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Liverr > Graphics & Design ></span>
          <h1>I will create ai generated art for you</h1>

          <div className="user">
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
          <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
          <h2>About The Seller</h2>
          <div className="user">
          <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <div className="info">
          <span>John Doe</span>
          <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
          </div>
          </div>
          <div className="box">
          <div className="items">
           <div className="item">
           <span className="title">From</span>
           span className="title">From</span>

           </div>
          </div>
          <p>
          My name is Anna, I enjoy creating AI generated art in my spare
          time. I have a lot of experience using the AI program and that
          means I know what to prompt the AI with to get a great and
          incredibly detailed result.
          </p>
          </div>
          </div>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default Gig