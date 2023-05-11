import React from 'react'
import pic1 from './Pictures/pic1intro.jpg'
import pic2 from './Pictures/pic2intro.jpg'

function Intro() {
  return (
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={pic1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={pic2} alt="Second slide"/>
    </div>
  </div>
  <a className="carousel-control-prev ahover" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next ahover" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

export default Intro