import { useState, useEffect } from "react";
import Comment from "./CommentCard";

export default function Comments({ singleArticle }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}/comments`
    )
      .then((res) => {
        res.json();
      })
      .then(({ comments }) => setComments(comments));
    setIsLoading(false);
  }, [singleArticle.article_id]);

  return (
    <div className="single-articles-comments">
      {isLoading && <div>Loading...</div>}
      <h3 className="comments-header">Comments</h3>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.comment_id} />;
      })}
    </div>
  );
}
