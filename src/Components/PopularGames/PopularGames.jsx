import React from "react";
import "./PopularGames.css"; // Import the CSS file for styling

const PopularGames = () => {
  const popularGames = [
    {
      id: 1,
      name: "Free Fire x Shipuden",
      image: "https://i.pinimg.com/474x/42/7c/1a/427c1a1e4077f4ccc0442c903a937d26.jpg",
      description: "A fast-paced battle royale game with intense survival action.",
    },
    {
      id: 2,
      name: "PUBG: Battlegrounds",
      image: "https://i.pinimg.com/474x/62/50/b0/6250b09b79eb4582b34459659587fadc.jpg",
      description: "The iconic battle royale game that started it all.",
    },
    {
      id: 3,
      name: "Mobile Legends: Bang Bang",
      image: "https://i.pinimg.com/474x/10/5d/3b/105d3b7db3af40de3f19217cf7de5046.jpg",
      description: "A thrilling MOBA game with fast-paced 5v5 battles.",
    },
    {
      id: 4,
      name: "Solo Leveling: Arise",
      image: "https://i.pinimg.com/474x/8a/34/ef/8a34efc2c17aa7d5315aafb547d110bb.jpg",
      description: "An action RPG based on the popular Solo Leveling webtoon.",
    },
    {
      id: 5,
      name: "Honor of Kings",
      image: "https://i.pinimg.com/736x/26/bd/de/26bdded9c4f6bd96d8536197defcaef5.jpg",
      description: "A globally popular MOBA game with millions of players.",
    },
    {
      id: 6,
      name: "Valorent",
      image: "https://i.pinimg.com/474x/7f/e2/76/7fe2762045cd672f6f7ed248ca4c407c.jpg",
      description: "Tactical 5v5 shooter with unique agents and strategic gameplay",
    },
    {
      id: 7,
      name: "Call of Duty Mobile",
      image: "https://i.pinimg.com/736x/62/f6/ea/62f6ea9ed3824b931d036497143db7f8.jpg",
      description: "Call of Duty Mobile: Fast-paced, competitive FPS action on mobile.",
    },
    {
      id: 8,
      name: "Black Myth Wukong",
      image: "https://i.pinimg.com/736x/19/d4/70/19d4702ee69564fbcf66ca749fd59c2f.jpg",
      description: "Epic action RPG inspired by *Journey to the West* mythology.",
    },
  ];

  return (
    <div className="popular-games-container">
      <h1 className="popular-games-title">Popular Games in 2025</h1>
      <div className="games-grid">
        {popularGames.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="game-image" />
            <h2 className="game-name">{game.name}</h2>
            <p className="game-description">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;