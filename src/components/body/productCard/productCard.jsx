import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
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
        <button className="select-btn" onClick={() => onSelect(product)}>
          Выбрать
        </button>
      </div>
    </div>
  );
};



export default ProductCard;