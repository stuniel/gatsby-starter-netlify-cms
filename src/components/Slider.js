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
    const { posts } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "20%",
      slidesToShow: 1,
      swipeToSlide: true,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
        {posts
          .map(({ node: post }, index) => (
            <div
              className="content"
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              <img src="https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/1384237_676292945716987_1238664053_n.jpg?_nc_cat=106&_nc_ht=scontent.fwaw3-1.fna&oh=a745c57da05c03c59802942e7d024370&oe=5C7B6A25" />
              <p>
                <strong>0{index + 1} </strong>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SliderGallery
