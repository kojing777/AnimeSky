import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const sliderRef = useRef(null);

  const slider = [
    {
      img: "https://i.pinimg.com/736x/84/5f/cc/845fcc9f1467a21c15ba956b9eade9c5.jpg",
    },
    {
      img: "https://i.pinimg.com/474x/cc/8c/54/cc8c54275b6ddc2a7beedc13c6d54d07.jpg",
    },
    {
      img: "https://i.pinimg.com/474x/f5/28/1c/f5281cfe8976e43a2c504b3f8095dc9e.jpg",
    },
    {
      img: "https://i.pinimg.com/474x/f6/15/64/f61564831fca676039ff7aed2d3e3460.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div
      className="slider-container"
      style={{
        width: "90%",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        position: "relative",
        padding: "20px", 
      }}
    >
      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {slider.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Custom Buttons on Left and Right */}
      <button
        onClick={() => sliderRef.current.slickPrev()} 
        style={{
          position: "absolute",
          left: "-50px", 
          top: "50%",
          transform: "translateY(-50%)",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1, 
          fontSize: "18px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px", 
          height: "40px", 
        }}
      >
        &lt; {/* Previous symbol */}
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        style={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "10px", 
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "50%", 
          zIndex: 1,
          fontSize: "20px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px", 
          height: "40px", 
        }}
      >
        &gt; {/* Next symbol */}
      </button>

      {/* Add custom CSS for gap between slides */}
      <style>
        {`
          .slick-slide > div {
            padding: 0 10px; // Add horizontal gap between slides
          }
          @media (max-width: 768px) {
            .slick-slide > div {
              padding: 0 5px; // Reduce gap on smaller screens
            }
          }
        `}
      </style>
    </div>
  );
}

export default AutoPlay;