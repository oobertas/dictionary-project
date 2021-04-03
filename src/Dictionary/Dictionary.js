import React, { useState } from "react";
import axios from "axios";
import "../Dictionary/Dictionary.css";
import Results from "./Results/Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus="true"
          onChange={handleKeyWordChange}
          className="searchInput form-control form-control-lg"
          placeholder="Enter a word you want to search for and press Enter"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
