import { useState } from "react";

export default function UpVoting({ singleArticle }) {
  const [newVote, setNewVote] = useState(false);

  function handleClick() {
    fetch(
      `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}`
    )
      .then((res) => res.json())
      .then(
        (votes) => {
          setNewVote(votes);
        },
        [singleArticle.article_id]
      );
  }
  return (
    <div>
      <button onClick={handleClick} id="upvoting-button">
        upvote
      </button>
      <p>{singleArticle.votes}</p>
    </div>
  );
}
