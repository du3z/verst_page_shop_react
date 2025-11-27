import React from 'react';
import SearchBar from './searchbar/searchBar.jsx';
import PromoBanner from './promoBanner/promoBanner.jsx';
import Categories from './categories/categories.jsx';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <SearchBar />   
        <PromoBanner />
         <Categories />
      </div>
    </header>
  );
};

export default Header;
