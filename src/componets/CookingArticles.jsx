import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function CookingArticles() {
  const [cookingArticles, setCookingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=cooking`)
      .then((res) => res.json())
      .then(({ articles }) => {
        setCookingArticles(articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="coding-articles-list">
      <h2 className="coding-articles-header">Articles for cooking</h2>
      {cookingArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
