import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleFilter, setArticleFilter] = useState(null);
  const [articleOrder, setArticleOrder] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://sobe-news.herokuapp.com/api/articles`, {
        params: {
          topic: topic,
          sort_by: articleFilter,
          order_by: articleOrder,
        },
      })
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      });
  }, [topic, articleFilter, articleOrder]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="articles-list">
      <SortArticles
        setArticleFilter={setArticleFilter}
        setArticleOrder={setArticleOrder}
      />
      <h2 className="articles-header">Articles</h2>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </div>
  );
}
