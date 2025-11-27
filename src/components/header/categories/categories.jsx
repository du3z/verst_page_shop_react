import React from 'react';
import './Categories.css';
import accessoriesImg from '../../../assets/categories/acsesuar.png';
import tshirtsImg from '../../../assets/categories/tshirt.png';
import hoodiesImg from '../../../assets/categories/kofti.png';
import jacketsImg from '../../../assets/categories/curtki.png';
import pantsImg from '../../../assets/categories/shtani.png';

const Categories = () => {
  const categories = [
    { name: 'Аксессуары', image: accessoriesImg },
    { name: 'Футболки', image: tshirtsImg },
    { name: 'Толстовки', image: hoodiesImg },
    { name: 'Куртки', image: jacketsImg },
    { name: 'Штаны', image: pantsImg },
  ];

  return (
    <div className="categories">
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-square">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-name">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;