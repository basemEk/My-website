import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Laravel from "../images/laravel-resized.png";
import ReactH from "../images/react.png";
import WordPress from "../images/wordpress-logo.png";
import Git from "../images/git.jpg";

import "./Slider.css";


function Slider() {
  return (
    <div className="carousel">
      <div>
        <h2 className="tech-we-use">
          <i style={{color:'#007BFF'}}>Technologies We Use</i>
        </h2>
      </div>

      <Carousel>
        <div className="tech-description">
          <h4>Web and Mobile Development</h4>
          <p>We use some powerful tools to provide you the best service</p>
        </div>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={Laravel} alt="First slide" />
          <Carousel.Caption>
          <h4 className="tech-exerpt">As Back-end</h4>
          </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={ReactH}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4 className="tech-exerpt">As Front-end</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={WordPress}
            alt="Third slide"
          />
          <br />
          <Carousel.Caption>
            <h4 className="tech-exerpt">As Content Management Systems & Blogs</h4>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={Git}
            alt="forth slide"
          />
          <br />
          <Carousel.Caption>
            <h4 className="tech-exerpt">As Online Management Systems </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
