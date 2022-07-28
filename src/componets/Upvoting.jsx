import { useState } from "react";

export default function UpVoting({ singleArticle }) {
  const [newVote, setNewVote] = useState(singleArticle.votes);
  const [hasVoted, setHasVoted] = useState(false);

  function handleClick() {
    setHasVoted(false);
    fetch(
      `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}`
    )
      .then((res) => res.json())
      .then(() => {
        setNewVote(newVote + 1);
      }, [singleArticle.article_id]);
    setHasVoted(true);
  }

  if (hasVoted) {
    return (
      <div>
        <p>{newVote}</p>
        <p>Thank you for your vote!</p>
      </div>
    );
  }
  return (
    <div>
      <p>{newVote}</p>
      <button onClick={handleClick} id="voting-button">
        vote
      </button>
    </div>
  );
}
