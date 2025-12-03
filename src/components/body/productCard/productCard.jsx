import React, { useState } from 'react';
import './ProductCard.css';
import HeartOutline from '../../../assets/icons/heart-outline.svg';
import HeartFilled from '../../../assets/icons/heart-filled.svg';

const ProductCard = ({ product, onSelect }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          <img 
            src={isFavorite ? HeartFilled : HeartOutline} 
            alt="Избранное" 
            className="heart-icon"
          />
        </button>
      </div>
      
      <div className="product-content">
        <div className="price-section">
          <div className="current-price">{product.price} ₽</div>
          {product.oldPrice && (
            <div className="discount-section">
              <div className="old-price">{product.oldPrice} ₽</div>
              <div className="discount-percent">-{product.discountPercent}%</div>
            </div>
          )}
        </div>
        <div className="product-description">{product.description}</div>
      </div>
      
      <button className="select-btn" onClick={() => onSelect(product)}>
        Выбрать
      </button>
    </div>
  );
};

export default ProductCard;