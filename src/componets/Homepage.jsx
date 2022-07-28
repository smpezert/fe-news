import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://sobe-news.herokuapp.com/api/articles`)
      .then((res) => res.json())
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="articles-list">
      <h2 className="articles-header">Articles</h2>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
