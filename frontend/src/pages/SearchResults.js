import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const { search } = useLocation(); // Get the search query from URL
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get('query'); // Extract query parameter

  useEffect(() => {
    if (query) {
      // Fetch results based on the query, e.g., from an API or local data
      console.log(`Searching for: ${query}`);
      // Example fetch API (replace with your backend search)
      fetch(`https://yourapi.com/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error('Error fetching search results:', error));
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <div>
        {results.length === 0 ? (
          <p>No results found</p>
        ) : (
          results.map((result) => (
            <div key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
