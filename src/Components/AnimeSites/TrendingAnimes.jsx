import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TrendingAnimes.css'; // Import your CSS file

const TrendingAnimes = () => {
  const trendingAnimes = [
    {
      id: 1,
      title: 'Attack on Titan',
      image: 'https://i.pinimg.com/474x/0d/6b/34/0d6b349f99d5b56d41ad961c1496894d.jpg',
      description: 'Eren Yeager fights Titans to save humanity.',
    },
    {
      id: 2,
      title: 'Demon Slayer',
      image: 'https://i.pinimg.com/474x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg',
      description: 'Tanjiro Kamado battles demons to save his sister.',
    },
    {
      id: 3,
      title: 'Jujutsu Kaisen',
      image: 'https://i.pinimg.com/474x/0b/25/6b/0b256b6bf21a2607b9d3950b5b1a764f.jpg',
      description: 'Yuji Itadori fights curses with Jujutsu sorcery.',
    },
    {
      id: 4,
      title: 'My Hero Academia',
      image: 'https://i.pinimg.com/474x/e0/11/86/e01186a761edab11e4d9fe8e7984d033.jpg',
      description: 'Izuku Midoriya trains to become the greatest hero.',
    },
    {
      id: 5,
      title: 'One Piece',
      image: 'https://i.pinimg.com/474x/2e/d6/18/2ed618e91b7dd69d6578a378c53fba10.jpg',
      description: 'Monkey D. Luffy searches for the legendary treasure.',
    },
    {
      id: 6,
      title: 'Naruto',
      image: 'https://i.pinimg.com/474x/f0/1f/a2/f01fa29f00e2fa0afaf6121ff0d90944.jpg',
      description: 'Naruto Uzumaki dreams of becoming Hokage.',
    },
    {
      id: 7,
      title: 'Tokyo Revengers',
      image: 'https://i.pinimg.com/474x/59/b8/3d/59b83d58f37ce1a7bbaa17afafb1547d.jpg',
      description: 'Takemichi time-travels to save his friends.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <div className="trending-animes-section">
      <h2>Popular Animes</h2>
      <h3>February 2025 Seasonal Sampler</h3>
      <Slider {...settings}>
        {trendingAnimes.map((anime) => (
          <div key={anime.id} className="anime-card">
            <div className="anime-image">
              <img src={anime.image} alt={anime.title} />
              <div className="overlay">
                <h3>{anime.title}</h3>
                <p>{anime.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};








export default TrendingAnimes;