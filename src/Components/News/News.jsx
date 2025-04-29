import React, { useContext } from "react";
import { NewsContext } from "../../NewsContext/NewsContext"; // Corrected import path
import "./News.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  const { news } = useContext(NewsContext);

  return (
    <div className="news-container">
      <h2 className="news-heading">
        <FontAwesomeIcon icon={faNewspaper} className="news-icon" />
        Trending Anime News
      </h2>
      <div className="news-grid">
        {news.map((item) => {
          console.log("News URL:", item.url); // Debugging line
          return (
            <div key={item.id} className="news-card">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-source">{item.source}</p>
                <div className="news-read-more">
                  Read More <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;