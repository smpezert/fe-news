import { useState, useEffect } from "react";
import Comment from "./CommentCard";

export default function Comments({ singleArticle }) {
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}/comments`
    )
      .then((res) => res.json())
      .then(({ comments }) => {
        setAllComments(comments);
        setIsLoading(false);
      });
  }, [singleArticle.article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!allComments) {
    return <p>There are no comments for this article yet...</p>;
  } else
    return (
      <div className="single-articles-comments">
        <h4 className="comments-header">Comments</h4>
        {allComments.map((comment) => {
          return <Comment comment={comment} key={comment.comment_id} />;
        })}
      </div>
    );
}
