export default function ArticlesSearch({ setArticleSearch, setArticleFilter }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="articles-search-form" onSubmit={handleClick}>
        <input
          type="text"
          name="searchedArticle"
          id="searchedArticle"
          placeholder="Enter the name of article here..."
        ></input>
        <button type="submit" id="articles-search-button">
          Search
        </button>
      </form>
    </>
  );
}
