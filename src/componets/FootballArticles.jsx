import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function FootballArticles() {
  const [footballArticles, setFootballArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=football`)
      .then((res) => res.json())
      .then(({ articles }) => {
        setFootballArticles(articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="coding-articles-list">
      <h2 className="coding-articles-header">Articles for football</h2>
      {footballArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
