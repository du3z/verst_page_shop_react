import SearchBar from './searchbar/searchBar';
import PromoBanner from './promoBanner/promoBanner'
import Categories from './categories/categories'


const Header = ({ searchQuery, setSearchQuery, onSearchFocus }) => {
  const handleProductSelect = (product) => {
    console.log('Выбран товар из поиска:', product);
  };

  return (
    <header className="header">
      <div className="header-container">
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          onProductSelect={handleProductSelect}
          onFocus={onSearchFocus}
        />   
        <PromoBanner />
        <Categories />
      </div>
    </header>
  );
};

export default Header;