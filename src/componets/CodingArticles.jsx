import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function CodingArticles() {
  const [codingArticles, setCodingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=coding`)
      .then((res) => res.json())
      .then(({ articles }) => {
        setCodingArticles(articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="articles-list">
      <h2 className="articles-header">Articles for coding</h2>
      {codingArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
