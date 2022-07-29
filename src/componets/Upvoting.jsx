import { useState } from "react";
import axios from "axios";

export default function UpVoting({ singleArticle }) {
  const [newVote, setNewVote] = useState(singleArticle.votes);
  const [hasVoted, setHasVoted] = useState(false);

  function handleClick() {
    setHasVoted(false);
    setNewVote(newVote + 1);
    axios
      .patch(
        `https://sobe-news.herokuapp.com/api/articles/${singleArticle.article_id}`,
        { inc_votes: 1 }
      )
      .then(() => {
        setNewVote(newVote);
        setHasVoted(true);
      });
  }

  // const voteHandler = () => {
  //   setNewVotes(newVotes + 1);
  //   setDisabled(true);
  //   setErr(null);
  //   axios
  //     .patch(`https://schaxmann-news.herokuapp.com/api/articles/${article}`, {
  //       inc_votes: 1,
  //     })
  //     .then(() => {
  //       setDisabled(false);
  //     })
  //     .catch(() => {
  //       setNewVotes(newVotes);
  //       setErr("Something went wrong, please try again later.");
  //       setDisabled(false);
  //     });
  // };

  if (hasVoted) {
    return (
      <div>
        <p>Thank you for your vote!</p>
      </div>
    );
  }
  return (
    <div>
      <button onClick={handleClick} id="voting-button">
        vote
      </button>
    </div>
  );
}
