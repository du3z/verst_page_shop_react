import React, { useEffect, useState, useRef } from 'react';
import { productsData } from '../../data/products';
import './FullscreenSearch.css';

const FullscreenSearch = ({ 
  searchQuery, 
  setSearchQuery, 
  isOpen, 
  onClose,
  onSelectProduct 
}) => {
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  
  const popularSearches = [
    'Футболка', 
    'Женская кофта', 
    'Куртка', 
    'Джинсы', 
    'Аксессуары',
    'Толстовка',
    'Штаны',
    'Сертификат'
  ];

  // Фокусируемся на инпуте при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  // Поиск товаров
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = productsData.filter(product =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 3);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handlePopularSearch = (term) => {
    setSearchQuery(term);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleProductSelect = (product) => {
    if (onSelectProduct) {
      onProductSelect(product);
    }
    onClose();
  };

  const handleGoToSearch = () => {
    console.log('Перейти к поиску:', searchQuery);
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleGoToSearch();
    }
    
    // ESC для закрытия
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Закрытие при клике вне инпута (если пусто)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !searchQuery.trim()) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fullscreen-search-overlay" onClick={handleOverlayClick}>
      {/* Хедер с инпутом и кнопкой "Перейти" ВНУТРИ */}
      <div className="fullscreen-search-header">
        <div className="search-input-with-button">
          <div className="search-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Найти товар"
              className="fullscreen-search-input"
            />
            
            {/* Кнопка "Перейти" показывается ТОЛЬКО когда есть текст */}
            {searchQuery.trim() && (
              <button 
                className="go-to-search-header-btn"
                onClick={handleGoToSearch}
              >
                Перейти
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Контент поиска */}
      <div className="fullscreen-search-content">
        
        {/* Заголовок "Часто ищут" (только когда пусто) */}
        {!searchQuery && (
          <>
            <h3 className="popular-title">
              Часто ищут
            </h3>
            
            {/* Список популярных запросов */}
            <div className="popular-searches">
              {popularSearches.map((term, index) => (
                <button 
                  key={index}
                  className="popular-term"
                  onClick={() => handlePopularSearch(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Результаты поиска (если есть текст) */}
        {searchQuery && searchResults.length > 0 && (
          <div className="search-results-container">
            <div className="search-results">
              {searchResults.map(product => (
                <div 
                  key={product.id} 
                  className="search-result-item"
                  onClick={() => handleProductSelect(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.description} 
                    className="search-product-image"
                  />
                  <div className="search-product-info">
                    <div className="search-product-name">
                      {product.description}
                    </div>
                    <div className="search-product-price">
                      {product.price} ₽
                      {product.oldPrice && (
                        <span className="old-price">
                          {product.oldPrice} ₽
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Сообщение если ничего не найдено */}
        {searchQuery && searchResults.length === 0 && (
          <div className="no-results">
            Ничего не найдено по запросу "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default FullscreenSearch;