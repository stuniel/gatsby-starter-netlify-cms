import React, { Component } from 'react'
import { Link } from 'gatsby'
import Slider from 'react-slick'

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class SliderGallery extends Component {
render() {
    const { children, posts } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      swipeToSlide: true,
      slidesToShow: 1,
      speed: 500,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings} ref={node => { this.slider = node }}>
        {children}
        </Slider>
      </div>
    );
  }
}

export default SliderGallery
