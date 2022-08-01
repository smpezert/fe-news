export default function SortArticles({ setArticleFilter, setArticleOrder }) {
  function handleFilter(e) {
    e.preventDefault();
    setArticleFilter(document.getElementById("sort_by").value);
  }

  function handleOrder(e) {
    e.preventDefault();
    setArticleOrder(document.getElementById("order_by").value);
  }

  return (
    <div>
      <select name="sort_by" id="sort_by" onChange={handleFilter}>
        <option value="">Sort by...</option>
        <option value="created_at">Date</option>
        {/* <option value="comment_count">Comments</option> */}
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
