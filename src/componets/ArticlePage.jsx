import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import SingleArticle from "./SingleArticle";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://sobe-news.herokuapp.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((article) => {
        setSingleArticle(article);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <SingleArticle singleArticle={singleArticle} />;
}
