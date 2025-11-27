import React from 'react';
import './promoBanner.css';
import bannerImg from '../../../assets/banner/banner.png'

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="banner-image">
        <img src={bannerImg} alt="Акция" />
      </div>
      <div className="dots-indicator">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default PromoBanner;

