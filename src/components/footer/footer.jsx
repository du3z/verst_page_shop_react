import React from 'react';
import './Footer.css';
import HomeIcon from '../../assets/icons/home.svg';
import CatalogIcon from '../../assets/icons/catalog.svg';
import FavoriteIcon from '../../assets/icons/favorite.svg';
import CartIcon from '../../assets/icons/cart.svg';
import AccountIcon from '../../assets/icons/account.svg';
import BadgeIcon from '../../assets/icons/badge-icon.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    const categories = document.querySelector('.categories');
    if (categories) {
      categories.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-text">
          <p>Твой магазин - лучшие товары</p>
          <div className="footer-badge">
            <img src={BadgeIcon} alt="" className="badge-icon" />
            <span className="badge-text">noxerai_bot</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="nav-container">
          <nav className="footer-nav">
            <button className="nav-item" onClick={scrollToTop}>
              <img src={HomeIcon} alt="Главная" className="nav-icon" />
            </button>
            
            <button className="nav-item" onClick={scrollToCatalog}>
              <img src={CatalogIcon} alt="Каталог" className="nav-icon" />
            </button>
            
            <button className="nav-item">
              <img src={FavoriteIcon} alt="Избранное" className="nav-icon" />
            </button>
            
            <button className="nav-item">
              <img src={CartIcon} alt="Корзина" className="nav-icon" />
            </button>
            
            <button className="nav-item">
              <img src={AccountIcon} alt="Аккаунт" className="nav-icon" />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;