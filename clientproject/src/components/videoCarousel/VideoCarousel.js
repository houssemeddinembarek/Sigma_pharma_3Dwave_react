import React, { useEffect, useState, useRef } from 'react'
import "./videoCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import vi from '../../assets/vid1.mp4'
import vi2 from '../../assets/vi2.mp4'
import Slider from 'react-animated-slider';



function VideoCarousel() {
  const [play, setPlay] = useState(true)

  const items = [
    { src: 'vi', title: 'titre1', description: 'description1' },
    // { src: 'vi2', title: 'titre2', description: 'description2' },
  ]

  useEffect(() => {
    if (play === false) {
      setPlay(true);
      console.log(play);
    }

  }, [])

  return (
    <div className='d-flex justify-content-center ' style={{ width: "100%" }}>
      <Carousel autoplay={18000} >
        {/* <Carousel.Item interval={1000}> */}
        <Carousel.Item interval={1000}>
          <video className="video" autoPlay loop muted>
            <source src={vi} type="video/mp4" />
          </video>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <video className="img-fluid" autoPlay loop muted>
            <source
              src={vi2}
              type="video/mp4"
            />
          </video>

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div >
  )
}

export default VideoCarousel