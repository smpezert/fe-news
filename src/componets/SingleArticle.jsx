export default function SingleArticle({ singleArticle }) {
  return (
    <div className="single-article">
      <h3>
        {singleArticle.title} - {singleArticle.topic}
      </h3>
      <h4>by {singleArticle.author}</h4>
      <p>{singleArticle.body}</p>
      <ul className="single-articlePage-list">
        <li>
          created at{" "}
          {singleArticle.created_at.slice(0, 10).split("-").reverse().join("-")}
        </li>
        <li>{singleArticle.votes} votes</li>
        {/* <Comments />
        <Link to="/comments" /> */}
        <li>{singleArticle.comment_count} comments</li>
      </ul>
    </div>
  );
}
