import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function FootballArticles() {
  const [footballArticles, setFootballArticles] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=football`)
      .then((res) => res.json())
      .then(({ articles }) => setFootballArticles(articles));
  }, []);

  return (
    <div className="coding-articles-list">
      <h2 className="coding-articles-header">Articles for football</h2>
      {footballArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
