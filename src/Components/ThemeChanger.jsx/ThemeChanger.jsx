import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext from the same folder

const ThemeChanger = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-changer">
      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? "🌙" : "☀️"} {/* Toggle between moon and sun icons */}
      </button>
    </div>
  );
};

export default ThemeChanger;