import React from "react";
import "./PopularGames.css"; // Import the CSS file for styling

const PopularGames = () => {
  const popularGames = [
    {
      id: 1,
      name: "Cyberpunk 2077: Phantom Liberty",
      image: "https://i.pinimg.com/474x/05/d8/49/05d84991342b576dc955c03773d6e10e.jpg",
      description: "The ultimate futuristic RPG experience with immersive storytelling.",
    },
    {
      id: 2,
      name: "Elden Ring: Shadow of the Erdtree",
      image: "https://via.placeholder.com/300x200",
      description: "A new expansion to the critically acclaimed open-world RPG.",
    },
    {
      id: 3,
      name: "Starfield: Galactic Odyssey",
      image: "https://i.pinimg.com/474x/7a/f0/c9/7af0c9529466e9f2f0f529cd71a3d6dd.jpg",
      description: "Explore the vastness of space in this epic sci-fi adventure.",
    },
    {
      id: 4,
      name: "The Legend of Zelda: Echoes of the Past",
      image: "https://via.placeholder.com/300x200",
      description: "A new chapter in the legendary Zelda series.",
    },
    {
      id: 5,
      name: "Horizon Forbidden West: The Frozen Wilds",
      image: "https://via.placeholder.com/300x200",
      description: "Continue Aloy's journey in this stunning open-world game.",
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