import React, { useState, useEffect } from 'react';
import ProductCard from './productCard/productCard.jsx';
import { productsData } from '../../data/products';
import './Body.css';

const Body = () => {
  const [products, setProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState('');


  const searchProducts = (query) => {
    if (!query.trim()) {
      setProducts(productsData);
      return;
    }
    
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  useEffect(() => {
    searchProducts(searchQuery);
  }, [searchQuery]);

  const handleSelectProduct = (product) => {
    console.log('Выбран товар:', product);
  };

  return (
    <div className="body">   
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onSelect={handleSelectProduct}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="no-products">Товары не найдены</div>
      )}
    </div>
  );
};

export default Body;