export default function ArticlesSearch({
  setArticleSearch,
  setArticleFilter,
  setArticleOrder,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const inputArticles = document.getElementById("searchedArticle");
    setArticleSearch(inputArticles.value);
    inputArticles.value = "";
  };

  function handleFilter() {
    setArticleFilter(document.getElementById("sort_by").value);
  }

  function handleOrder() {
    setArticleOrder(document.getElementById("order_by").value);
  }

  return (
    <>
      <form className="articles-search-form" onSubmit={handleClick}>
        <input
          type="text"
          name="searchedArticle"
          id="searchedArticle"
          placeholder="Search for articles..."
        ></input>
        <button type="submit" id="articles-search-button">
          Search
        </button>
      </form>
      <select name="sort_by" id="sort_by" onChange={handleFilter}>
        <option value="">Select...</option>
        <option value="topic">Topics</option>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="created_at">Date</option>
      </select>
      <select name="order_by" id="order_by" onChange={handleOrder}>
        <option value="">Order...</option>
        <option value="desc">A-Z</option>
        <option value="asc">Z-A</option>
      </select>
    </>
  );
}
