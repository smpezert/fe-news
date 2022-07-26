import { useState } from "react";
import ArticlesSearch from "./ArticlesSearch";
import ArticlesList from "./ArticlesList";

export default function Home() {
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [articleSearch, setArticleSearch] = useState(null);
  const [articleFilter, setArticleFilter] = useState(null);
  const [articleOrder, setArticleOrder] = useState(null);

  return (
    <div>
      <h2>Welcome to Newsport!</h2>
      <ArticlesSearch
        articleSearch={articleSearch}
        setArticleSearch={setArticleSearch}
        articleFilter={articleFilter}
        setArticleFilter={setArticleFilter}
        articleOrder={articleOrder}
        setArticleOrder={setArticleOrder}
      />
      <ArticlesList
        articleSearch={articleSearch}
        articleFilter={articleFilter}
        searchedArticles={searchedArticles}
        setSearchedArticles={setSearchedArticles}
        articleOrder={articleOrder}
        setArticleOrder={setArticleOrder}
      />
    </div>
  );
}
