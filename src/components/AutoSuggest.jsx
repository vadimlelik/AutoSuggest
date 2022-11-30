import { useEffect, useState } from "react";
import useDebounce from "../hoock/useDebounce";
import Search from "./Search";
import { names } from "../array";

const AutoSuggest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearched = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClicked = (name) => {
    setSearchTerm(name);
  };

  useEffect(() => {
    const namesCopy = [...names];
    setResults(
      namesCopy.filter(
        (n) =>
          searchTerm === "" ||
          n.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [debouncedSearchTerm]);

  return (
    <>
      <Search
        searchTerm={searchTerm}
        handleSearched={handleSearched}
        handleClicked={handleClicked}
        results={results}
      />
    </>
  );
};

export default AutoSuggest;
