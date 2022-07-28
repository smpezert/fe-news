import UpVoting from "./Upvoting";
import DownVoting from "./DownVoting";

export default function Votes({ singleArticle }) {
  return (
    <div>
      <p>Votes</p>
      <UpVoting singleArticle={singleArticle} />
      <DownVoting singleArticle={singleArticle} />
    </div>
  );
}
