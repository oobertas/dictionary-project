import React, { useState } from "react";
import axios from "axios";
import { Circle } from "react-spinners-css";
import "../Dictionary/Dictionary.css";
import Results from "./Results/Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrl).catch((err) => {
      if (err.response.status === 404) {
        setResults("error");
      }
    });

    const pexelsApiKey =
      "563492ad6f917000010000013e44472f179047a2a1bc49e6b3041481";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={search}>
            <input
              type="search"
              autoFocus="true"
              onChange={handleKeyWordChange}
              className="searchInput form-control form-control-lg"
              placeholder="Enter a word and press Enter"
            />
          </form>
          <div className="hint">suggested words: sunset, wine, bicycle...</div>
        </section>
        <Results results={results} photos={photos} />
      </div>
    );
  } else {
    load();
    return <Circle />;
  }
}
