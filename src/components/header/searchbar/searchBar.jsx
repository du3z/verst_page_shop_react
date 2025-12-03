import React, { useState } from 'react';
import FullscreenSearch from '../../FullscreenSearch/FullscreenSearch';
import './searchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, onProductSelect }) => {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const handleFocus = () => {
    setIsFullscreenOpen(true);
  };


  const handleClick = () => {
    setIsFullscreenOpen(true);
  };

  return (
    <>
      <div className="search-container">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            onClick={handleClick}
            placeholder="Найти товар"
            className="search-input"
          />
        </form>
      </div>


      <FullscreenSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isOpen={isFullscreenOpen}
        onClose={() => setIsFullscreenOpen(false)}
        onSelectProduct={onProductSelect}
      />
    </>
  );
};

export default SearchBar;