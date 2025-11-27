  import React, { useState } from 'react';
  import './searchBar.css';

  const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.trim()) {
        performSearch(query);
      }
    };

    const performSearch = (searchTerm) => {
      console.log('Ищем:', searchTerm);
    };

    return (
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Найти товар"
          className="search-input"
        />
      </form>
    );
  };

  export default SearchBar;