import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";

export default function Homepage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleFilter, setArticleFilter] = useState(null);
  const [articleOrder, setArticleOrder] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let url = [];

    if (!articleFilter && !articleOrder) {
      url.shift();
      url.push("/");
    }

    if (articleFilter && !articleOrder) {
      url.shift();
      url.push(`/?sort_by=${articleFilter}`);
    }

    if (!articleFilter && articleOrder) {
      url.shift();
      url.push(`/?order_by=${articleOrder}`);
    }

    if (articleFilter && articleOrder) {
      url.shift();
      url.push(`/?sort_by=${articleFilter}&order_by=${articleOrder}`);
    }

    fetch(`https://sobe-news.herokuapp.com/api/articles${url}`)
      .then((res) => res.json())
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
  }, [articleFilter, articleOrder]);

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
