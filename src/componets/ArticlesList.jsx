import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesList({
  articleSearch,
  articleFilter,
  articleOrder,
  searchedArticles,
  setSearchedArticles,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let url = [];

    if (!articleSearch && !articleFilter && !articleOrder) {
      url.shift();
      url.push("/articles/");
    }
    if (articleSearch && !articleFilter && !articleOrder) {
      url.shift();
      url.push(`/articles/?search=${articleSearch}`);
    }
    if (!articleSearch && articleFilter && !articleOrder) {
      url.shift();
      url.push(`/articles/?sort_by=${articleFilter}`);
    }
    if (!articleSearch && !articleFilter && articleOrder) {
      url.shift();
      url.push(`/articles/?order_by=${articleOrder}`);
    }
    if (articleSearch && articleFilter && !articleOrder) {
      url.shift();
      url.push(`/articles/?search=${articleSearch}&?sort_by=${articleFilter}`);
    }
    if (!articleSearch && articleFilter && articleOrder) {
      url.shift();
      url.push(`/articles/?sort_by=${articleFilter}&?order_by=${articleOrder}`);
    }
    if (articleSearch && !articleFilter && articleOrder) {
      url.shift();
      url.push(`/articles/?search=${articleSearch}&?order_by=${articleOrder}`);
    } else if (articleSearch && articleFilter && articleOrder) {
      url.shift();
      url.push(
        `/articles/?search=${articleSearch}&?sort_by=${articleFilter}&?order_by=${articleOrder}`
      );
    }

    fetch(`https://sobe-news.herokuapp.com/api${url}`)
      .then((res) => res.json())
      .then((body) => {
        console.log(body.articles);
        setSearchedArticles(body.articles);
        if (!body.articles.length) {
          throw Error("Sorry, there is no data..");
        }
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [articleSearch, setSearchedArticles, articleFilter, articleOrder]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ArticleCard searchedArticles={searchedArticles} />
    </>
  );
}
