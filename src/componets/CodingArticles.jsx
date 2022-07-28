import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function CodingArticles() {
  const [codingArticles, setCodingArticles] = useState([]);

  useEffect(() => {
    fetch(`https://as-nc-news.herokuapp.com/api/articles?topic=coding`)
      .then((res) => res.json())
      .then(({ articles }) => setCodingArticles(articles));
  }, []);

  return (
    <div className="coding-articles-list">
      <h2 className="coding-articles-header">Articles for coding</h2>
      {codingArticles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
