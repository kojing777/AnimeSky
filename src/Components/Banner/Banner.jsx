import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"; // Ensure this path is correct

const Banner = () => {
  // Banner data
  const bannerData = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/d5/54/ac/d554ac03dd2fed960ae6f75e1b6cfda1.jpg",
      title: "Dan da dan",
      description:
        "Momo Ayase is a school girl who meets her classmate Ken Takakura. Their unlikely friendship will face them against ghosts and aliens in a series of dark and funny adventures.",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/474x/cf/1e/8b/cf1e8b87bd9796167da4acfbc5ad2ac3.jpg",
      title: "Demon Slayer: Kimetsu no Yaiba",
      description:
        "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/474x/38/85/46/388546f29b9265a1d1b82829fb05028a.jpg",
      title: "Jujutsu Kaisen",
      description:
        "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/474x/62/92/73/629273455138cc31f3d5287d713ff9d8.jpg",
      title: "Attack on Titan",
      description:
        "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/474x/e9/51/3d/e9513d8fce1ca4f5a51e6954dbbc7a99.jpg",
      title: "My Hero Academia",
      description:
        "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    },
  ];

  // React Slick settings
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {bannerData.map((banner) => (
          <div key={banner.id} className="banner-slide">
            <img
              src={banner.image}
              className="banner-image"
              alt={banner.title}
            />
            <div className="banner-overlay">
              <div className="banner-details">
                <h1>{banner.title}</h1>
                <p>{banner.description}</p>
                <div className="banner-buttons">
                  <button className="watch-now">Watch Now</button>
                  <button className="add-to-list">Add to List</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;