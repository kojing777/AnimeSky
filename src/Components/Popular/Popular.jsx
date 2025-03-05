import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Popular.css";

const Popular = () => {
  // Sample anime data for popular section
  const popularAnimeList = [
    {
      id: 1,
      title: "Attack on Titan",
      description:
        "Humanity fights for survival against giant humanoid creatures known as Titans.",
      image: "https://i.pinimg.com/474x/62/92/73/629273455138cc31f3d5287d713ff9d8.jpg",
    },
    {
      id: 2,
      title: "My Hero Academia",
      description:
        "A boy born without superpowers in a world full of them dreams of becoming a hero.",
      image: "https://i.pinimg.com/474x/e9/51/3d/e9513d8fce1ca4f5a51e6954dbbc7a99.jpg",
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
      title: "Naruto",
      description:
        "A young ninja dreams of becoming the strongest ninja and leader of his village.",
      image: "https://i.pinimg.com/474x/26/66/5c/26665c12d6c84f439e0b9dc35b01a58a.jpg",
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
      title: "Death Note",
      description:
        "A high school student discovers a supernatural notebook that can kill anyone whose name is written in it.",
      image: "https://i.pinimg.com/474x/82/90/06/829006f7d871f3039e4ded4e902d19a0.jpg",
    },
    {
      id: 8,
      title: "Fullmetal Alchemist",
      description:
        "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemy experiment.",
      image: "https://i.pinimg.com/474x/ab/e7/4c/abe74ca646c2680ab45967fa3a47d16d.jpg",
    },
    {
      id: 9,
      title: "Tokyo Ghoul",
      description:
        "A college student becomes a half-ghoul after an encounter with a ghoul and must navigate both worlds.",
      image: "https://i.pinimg.com/474x/39/90/d9/3990d9a269712084403bd71e4a07563c.jpg",
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
    dots: true, 
    infinite: true,
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 0, 
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="popular">
      <h2 className="section-title">Popular Anime</h2>
      <Slider {...settings}>
        {popularAnimeList.map((anime) => (
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

export default Popular;