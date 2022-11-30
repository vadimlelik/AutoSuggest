const Search = ({ handleSearched, handleClicked, results, searchTerm }) => {
  return (
    <div className="search">
      <span className="material-symbols-outlined"></span>
      <input
        value={searchTerm}
        spellCheck={false}
        type="text"
        onChange={handleSearched}
      />
      <div className="menu">
        <div>
          {results.map((name) => (
            <button key={name} onClick={() => handleClicked(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
