import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = [
        { id: 1, title: 'New Anime Season Announced', source: 'AnimeNewsNetwork', url: 'https://www.crunchyroll.com/news' },
        { id: 2, title: 'Top 10 Trending Animes of 2023', source: 'Crunchyroll', url: 'https://www.animenewsnetwork.com/' },
        { id: 3, title: 'Upcoming Anime Conventions', source: 'MyAnimeList', url: 'https://www.reddit.com/r/animenews/comments/f0tupz/best_news_sites/?rdt=57823' },
      ];
      setNews(newsData);
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>
      {children}
    </NewsContext.Provider>
  );
};