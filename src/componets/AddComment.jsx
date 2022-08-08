import { useState, useContext } from "react";
import { User } from "../contexts/User";
import axios from "axios";

export default function AddComment({ singleArticle }) {
  const { user } = useContext(User);
  const [newComment, setNewComment] = useState("");
  const [hasComment, setHasComment] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setHasComment(false);

    axios
      .post(
        `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}/comments`,
        {
          body: newComment,
          username: user.username,
        }
      )
      .then(() => {
        setNewComment(newComment);
        setHasComment(true);
      });
  }

  if (hasComment) {
    return (
      <div className="comment-card">
        <p>{newComment.body}</p>
        <p>{newComment.username}</p>
        <p>Thank you for submitting your comment!</p>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Add a new comment here:
        <label>
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="New Comment"
            type="text"
            name="new-comment"
            id="new-comment"
            required
          ></input>
        </label>
        <button type="submit" id="add-comment-button">
          Submit
        </button>
      </form>
    </div>
  );
}
