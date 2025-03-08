import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewNew.css"; // Import the CSS file

const NewNew = () => {
  // Sample anime data
  const animeList = [
    {
      id: 1,
      title: "Dragon Ball Daima",
      description:
        "Goku and friends turn into kids, battle foes, and seek restoration.",
      image: "https://i.pinimg.com/474x/37/59/47/37594792e261fafb802f7c9c5807b8be.jpg",
    },
    {
      id: 2,
      title: "Solo Leveling",
      description:
        "Weakest hunter Sung Jinwoo rises to power, battling monsters and evil forces.",
      image: "https://i.pinimg.com/474x/6b/c7/d3/6bc7d34eb329d199770c499ac0f71b92.jpg",
    },
    {
      id: 3,
      title: "Demon Slayer",
      description:
        "A young boy becomes a demon slayer to avenge his family and save his sister.",
      image: "https://i.pinimg.com/474x/f8/5d/38/f85d383fe83a69d5febb8b52a7b1a54a.jpg",
    },
    {
      id: 4,
      title: "Sakamoto Days",
      description:
        "Sakamoto, a retired hitman, juggles family life and chaotic assassins.",
      image: "https://i.pinimg.com/474x/77/89/ee/7789ee30cab577332fc5dd46ec2cdf12.jpg",
    },
    {
      id: 5,
      title: "One Piece",
      description:
        "A pirate crew searches for the ultimate treasure, the One Piece.",
      image: "https://i.pinimg.com/474x/10/8e/3b/108e3b1df00743bb3ce908a48c8e7e47.jpg",
    },
    {
      id: 6,
      title: "Jujutsu Kaisen",
      description:
        "A boy joins a secret organization of Jujutsu Sorcerers to fight curses.",
      image: "https://i.pinimg.com/736x/be/a1/a7/bea1a77e395dc04f5e12786e77caa6b2.jpg",
    },
    {
      id: 7,
      title: "No Longer Allowed In Another World",
      description:
        "",
      image: "https://i.pinimg.com/474x/31/17/71/3117715541272715a23a67fad0b57275.jpg",
    },
    {
      id: 8,
      title: "Chainsaw Man",
      description:
        "Denji merges with Chainsaw Devil, battles demons, and seeks a normal life.",
      image: "https://i.pinimg.com/474x/da/dc/99/dadc99a7f94d6f867b0cd71014b23eb4.jpg",
    },
    {
      id: 9,
      title: "Blue Box",
      description:
        "High school romance blossoms between badminton player Taiki and basketball star Chinatsu.",
      image: "https://i.pinimg.com/474x/a9/56/b4/a956b4e1c3f9112d84120b5834f3d3b6.jpg",
    },
    {
      id: 10,
      title: "Dan Da Dan",
      description:
        "Players are trapped in a virtual reality MMORPG and must clear the game to escape.",
      image: "https://i.pinimg.com/474x/8f/f4/c2/8ff4c29e8c652325884f62b63d26192f.jpg",
    },
  ];

  // React Slick settings
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 1000, 
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="new-new">
      <h2 className="section-title">New Releases</h2>
      <Slider {...settings}>
        {animeList.map((anime) => (
          <div key={anime.id} className="anime-card-container">
            <div className="anime-card">
              <img
                src={anime.image}
                className="anime-card-img"
                alt={anime.title}
              />
              <div className="anime-card-body">
                <h5 className="anime-card-title">{anime.title}</h5>
                <p className="anime-card-text">{anime.description}</p>
                <div className="anime-card-buttons">
                  <button className="anime-card-button watch-now">
                    Watch Now
                  </button>
                  <button className="anime-card-button add-to-list">
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewNew;