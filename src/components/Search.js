import React, { useState } from "react";

function Search({ onSeachSubmit }) {
  const [itemSearch, setItemSearch] = useState("")


  function handleSubmit(e) {
    e.preventDefault();

    onSeachSubmit(itemSearch)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={itemSearch}
        onChange={(e) => setItemSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
