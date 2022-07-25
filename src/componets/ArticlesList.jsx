// import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
// import ArticleCard from "./ArticleCard";

export default function ArticlesList({
  articleSearch,
  articleFilter,
  searchedArticles,
  setSearchedArticles,
}) {
  useEffect(() => {
    fetch(`https://sobe-news.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then((body) => {
        console.log(body.articles);
        setSearchedArticles(body.articles);
      });
  }, [articleSearch]);

  return (
    <>
      <ArticleCard searchedArticles={searchedArticles} />
    </>
  );
}
