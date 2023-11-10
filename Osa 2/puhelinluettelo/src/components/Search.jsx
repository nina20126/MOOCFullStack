const Search = ({ setSearchBarQuery }) => {
    return(
      <div>
        Search: <input 
          placeholder="Search..." 
          onChange={(event) => setSearchBarQuery((event.target.value).toLowerCase())}
        />
    </div>
    )
  }

export default Search