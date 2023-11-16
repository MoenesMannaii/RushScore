"use client";

import React, { useState, useEffect } from "react";
import { ArticleDetails } from "./ArticleDetails";
import { BiFootball } from "react-icons/bi";

export const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchFootballNews = async () => {
      try {
        const apiKey = "de501928bb3a47b28ab74fe0a90097fe";
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}`
        );
        const data = await response.json();
        const limitedNews = data.articles.slice(0, 6);

        setNews(limitedNews);
      } catch (error) {
        console.error("Error fetching football news:", error);
      }
    };

    fetchFootballNews();
  }, []);


  

  return (
    <>
      <div className="container mx-auto">
        <h2 className="bg-[#8a38f4] flex items-center px-2 py-2 text-2xl font-semibold">
          <BiFootball />
          &nbsp;Soccer Scoop
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 py-8 p-4 lg:px-0">
          {news.map((article, i) => (
            <ArticleDetails element={article} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};
