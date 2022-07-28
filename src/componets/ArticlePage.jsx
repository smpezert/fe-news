import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div className="single-article">
      <h3>
        {singleArticle.title} - {singleArticle.topic}
      </h3>
      <h4>by {singleArticle.author}</h4>
      <p>{singleArticle.body}</p>
      <ul className="single-articlePage-list">
        <li>
          created at{" "}
          {singleArticle.created_at.slice(0, 10).split("-").reverse().join("-")}
        </li>
        <li>{singleArticle.votes} votes</li>
        {/* <Comments />
        <Link to="/comments" /> */}
        <li>{singleArticle.comment_count} comments</li>
      </ul>
    </div>
  );
}
