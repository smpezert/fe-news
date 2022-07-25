import { useState } from "react";
import ArticlesSearch from "./ArticlesSearch";
import ArticlesList from "./ArticlesList";

export default function Home() {
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [articleSearch, setArticleSearch] = useState(null);
  const [articleFilter, setArticleFilter] = useState(null);

  return (
    <div>
      <ArticlesSearch
        articleSearch={articleSearch}
        setArticleSearch={setArticleSearch}
        articleFilter={articleFilter}
        setArticleFilter={setArticleFilter}
      />
      <ArticlesList
        articleSearch={articleSearch}
        articleFilter={articleFilter}
        searchedArticles={searchedArticles}
        setSearchedArticles={setSearchedArticles}
      />
    </div>
  );
}
