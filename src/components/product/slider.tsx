import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const ImageSlider = (props: any) => {
  const { images } = props;
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
  };

  return (
    <Slider {...settings} className="single_product_thumb">
      {images.map((img: string) => {
        return <img src={`${img}`} alt={img} key={Math.random()} />;
      })}
    </Slider>
  );
};

export default ImageSlider;
