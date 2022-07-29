import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";
import Votes from "./Votes";
import Comments from "./Comments";

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
  return (
    <div>
      <SingleArticle singleArticle={singleArticle} />
      <Votes singleArticle={singleArticle} />
      <Comments singleArticle={singleArticle} />
    </div>
  );
}
