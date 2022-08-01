export default function SortArticles({ setArticleFilter, setArticleOrder }) {
  function handleFilter(e) {
    e.preventDefault();
    setArticleFilter(e.target.value);
  }

  function handleOrder(e) {
    e.preventDefault();
    setArticleOrder(e.target.value);
  }

  return (
    <div>
      <select name="sort_by" id="sort_by" onChange={handleFilter}>
        <option value="">Sort by...</option>
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
      </select>
      <select name="order_by" id="order_by" onChange={handleOrder}>
        <option value="">Order by...</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
