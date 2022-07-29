import UpVoting from "./Upvoting";
import DownVoting from "./DownVoting";

export default function Votes({ singleArticle }) {
  return (
    <div>
      <p>You can vote the article here...</p>
      <UpVoting singleArticle={singleArticle} />
      <DownVoting singleArticle={singleArticle} />
    </div>
  );
}
