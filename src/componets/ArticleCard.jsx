import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div>
      <ul className="article-card">
        <li id="article-title">
          <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
        </li>
        <li>{article.topic}</li>
        <li>{article.body.slice(0, 150) + "... Read more"}</li>
        <li>by {article.author} </li>
        <li>
          created at
          {article.created_at.slice(0, 10).split("-").reverse().join("-")}
        </li>
      </ul>
    </div>
  );
}
