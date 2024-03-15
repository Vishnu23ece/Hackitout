import React from 'react'

import RollingCounter from './RollingCounter'
import CircularNumber from './Circular_counter'

const Home = () => {
  return (
    <div className='Home'>
     
      <div className="top_1">
        
        <div className="Navbar">
        <nav>
              <div className="img">
                  <img src="Images/im8.jpg" alt="logo"/>
              </div>
              <div className="options">
                  <button>Home</button>
                  <button>Services</button>
                  <button>About</button>
              </div>
          </nav>
        </div>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Images/im1.jpg" height={"600vh"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Images/im2.jpg" height={"600vh"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Images/im3.jpg" height={"600vh"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Images/im4.jpg" height={"600vh"} class="d-block w-100" alt="..."/>
    </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div className="counters">  
        <CircularNumber number={<RollingCounter start={0} end={0} duration={5000} />} svgSrc="Images/im4.png" height="64px" />
        <CircularNumber number={<RollingCounter start={0} end={0} duration={5000} />} svgSrc="Images/im5.png" />
        <CircularNumber number={<RollingCounter start={0} end={0} duration={1} />} svgSrc="Images/im6.png" />
        <CircularNumber number={<RollingCounter start={0} end={0} duration={5000} />} svgSrc="Images/im7.png" />
        </div>

        

      </div>


    </div>
  )
}

export default Home
