const Search = ({ handleSearch, searchInput }) => {
  return (
    <div>
      Search:{" "}
      <input
        placeholder="Search..."
        onChange={handleSearch}
        value={searchInput}
      />
    </div>
  );
};

export default Search;
