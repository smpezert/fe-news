import { useState } from "react";
import axios from "axios";

export default function DownVoting({ singleArticle }) {
  const [newVote, setNewVote] = useState(singleArticle.votes);
  const [hasVoted, setHasVoted] = useState(false);

  function handleClick() {
    setHasVoted(false);
    setNewVote(newVote - 1);
    axios
      .patch(
        `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}`,
        { inc_votes: -1 }
      )
      .then(() => {
        setNewVote(newVote);
        setHasVoted(true);
      });
  }

  if (hasVoted) {
    return (
      <div>
        <p>Sorry to hear you didn't like the article...</p>
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleClick} id="voting-button">
        unvote
      </button>
    </div>
  );
}
