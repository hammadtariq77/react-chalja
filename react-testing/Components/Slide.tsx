"use client"
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = () => {
    var settings = {
       fade:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 4000,
        cssEase: "ease-out",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
         <Slider {...settings}>
          <div >
            <img  src="https://placehold.co/1400x500/orange/white" alt="" />
          </div>
          <div>
          <img className='' src="https://placehold.co/1400x500/black/white" alt="" />
          </div>
          <div>
          <img src="https://placehold.co/1400x500/pink/white" alt="" />
          </div>
          <div>
          <img src="https://placehold.co/1400x500/red/white" alt="" />
          </div>
         
          
        </Slider>

    </div>
  )
}

export default Slide
