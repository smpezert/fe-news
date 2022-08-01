export default function SingleArticle({ singleArticle }) {
  return (
    <article className="single-article">
      <h3>
        {singleArticle.title} - {singleArticle.topic}
      </h3>
      <h5>by {singleArticle.author}</h5>
      <p>{singleArticle.body}</p>
      <ul className="single-articlePage-list">
        <li>
          created at{" "}
          {singleArticle.created_at.slice(0, 10).split("-").reverse().join("-")}
        </li>
        <li>{singleArticle.comment_count} comments</li>
        <li>{singleArticle.votes} votes</li>
      </ul>
    </article>
  );
}
