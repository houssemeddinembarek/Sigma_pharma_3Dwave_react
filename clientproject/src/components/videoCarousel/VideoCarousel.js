import React, { useEffect, useState, useRef } from 'react'
import "./videoCarousel.css"
// import { Carousel } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

import vi from '../../assets/vid1.mp4'
import vi2 from '../../assets/vi2.mp4'
// import ReactPlayer from 'react-player'
import Slider from 'react-animated-slider';

// import 'bootstrap/dist/css/bootstrap.min.css';


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
      {/* <video width="1300" height="650" controls >
        <source src={video2} type="video/mp4"  />
      </video> */}

      {/* <Carousel>
        {
          videoProperties.map((videoObj,index)=>{
            <Carousel.Item key={videoObj.id} >
               <ReactPlayer
                  url={videoObj.src}
                  width="100%"
                  pip={true}
                  controls={true}
                  playing={true}
               />
               <Carousel.Caption>
                <h3>{videoObj.title}</h3>
               </Carousel.Caption>
            </Carousel.Item> 
          })
        }
      </Carousel> */}

      {/* <ReactPlayer
        url={vi}
        width="100%"
        pip={true}
        playing={play}
        loop={true}
        controls={false}
        height="700px"
        onReady={() => { setPlay(true) }}
      /> */}



      {/* <Slider height="900px" >
        {items.map((item, index) => (
          // <div
          //     key={index}
          //     style={{ background: `url('${item.image}') no-repeat center center` }}
          // >
            <video width="1800px" height="700px" autoPlay muted loop >
              <source src={item.src} type="video/mp4" />
            </video>
            
          // </div>
        ))}
      </Slider> */}

      {/* <video  className='video'  autoPlay muted loop >
        <source src={vi2} className='source' type="video/mp4" />
      </video> */}



      {/* <div
        id="carouselVideoExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselVideoExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselVideoExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselVideoExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="img-fluid" autoPlay loop controls muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <video className="img-fluid" autoPlay loop muted>
              <source
                src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselVideoExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselVideoExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <Carousel autoplay={18000} >
        {/* <Carousel.Item interval={1000}> */}
        <Carousel.Item interval={1000}>
          <video className="video" autoPlay loop muted>
            <source src={vi} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className="img-fluid" autoPlay loop muted>
            <source
              src={vi2}
              type="video/mp4"
            />
          </video>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </div >

  )
}

export default VideoCarousel