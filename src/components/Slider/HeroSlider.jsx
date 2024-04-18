import React from "react";
import Slider from "react-slick";
import image1 from "../../images/slider/slider-1.jpg";
import image2 from "../../images/slider/slider-3.jpg";
import image3 from "../../images/slider/slider-2.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const slides = [
    {
      id: 1,
      text: "PRODUCTS",
      title: "The beauty of nature is hidden in details.",
      image: image1,
      alignment: "text-center",
    },
    {
      id: 2,
      text: "PRODUCTS",
      title: "The beauty of nature is hidden in details.",
      image: image3,
      alignment: "text-left",
    },
    {
      id: 3,
      text: "PRODUCTS",
      title: "The beauty of nature is hidden in details.",
      image: image2,
      alignment: "text-right",
    },
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slider-item th-fullpage hero-area scooby ${
              slide.id === 1
                ? "scooby1"
                : slide.id === 2
                ? "scooby2"
                : "scooby3"
            }`}
          >
            <div className="container">
              <div className="row">
                <div className={`col-lg-8 ${slide.alignment}`}>
                  <p
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".1"
                  >
                    {slide.text}
                  </p>
                  <h1
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".5"
                  >
                    {slide.title}
                  </h1>
                  <a
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".8"
                    className="btn"
                    href="shop.html"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
