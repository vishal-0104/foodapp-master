import React from 'react'
import '../styles/cards.css'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlinePlayCircle} from 'react-icons/ai'


export default function cards() {
  return (
    <>
    
    <div className="card-container">
      <div className='abs-green'></div>
    {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      > */}
  <div className="cards">
    <h4 className="card-head">Start Selling</h4>
    <p className="card-content">
      Are you a restaurant owner looking to grow your business? Reach new
      customers when you join oue network.
    </p>
    <br />

    <a href="#" className="card-link">
      SEE MORE
    </a>
    &nbsp;
    <AiOutlineArrowRight />
    <img src={image1} alt="Card 1" />
  </div>
  <div className="cards">
    <h4 className="card-head">Deliver Happiness</h4>
    <p className="card-content">
      Join our elite league of delivery riders delivering happiness to customers
      and earn to achieve your dreams while at it
    </p>
    <br />

    <a href="#" className="card-link">
      SEE MORE
    </a>
    &nbsp;
    <AiOutlineArrowRight />
    <img src={image2} alt="Card 2" />
  </div>
  <div className="cards">
    <h4 className="card-head">Behind the scenes</h4>
    <p className="card-content">
      IF you are passionate about helping us acieve out goal to deliver meals
      seamlessly,come join the team. Lorem ipsum dolor sit.
    </p>
    <br />
    <a href="#" className="card-link">
      SEE MORE
    </a>
    &nbsp;
    <AiOutlineArrowRight />
    {/* <br /> */}
    <img src={image3} alt="Card 2" />
  </div>
    {/* </Swiper> */}
</div>
    <div className='video-card'>
        <AiOutlinePlayCircle className='play-button'/>
    </div>
    </>
  )
}
