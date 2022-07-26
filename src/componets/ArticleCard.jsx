import { Link } from "react-router-dom";

export default function ArticleCard({ searchedArticles }) {
  return (
    <>
      <section className="articles-list">
        {searchedArticles.map((article) => {
          return (
            <section key={article.article_id}>
              <ul className="article-card">
                <li id="article-title">
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </li>
                <li>{article.author}</li>
                <li>{article.topic}</li>
              </ul>
            </section>
          );
        })}
      </section>
    </>
  );
}