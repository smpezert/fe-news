export default function Comment({ comment }) {
  return (
    <div className="comment-card">
      {console.log(comment)}
      <p>{comment.author}</p>
      <p>{comment.created_at.slice(0, 10).split("-").reverse().join("-")}</p>
      <p>{comment.votes} votes</p>
      <p>{comment.body}</p>
    </div>
  );
}
