import React from 'react';

interface CardProps {
  title: string;
  imgUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imgUrl, description }) => {
  
  return (
    <div className="each-card">
      <img src={imgUrl} alt={title} className="each-card-img" />
      <div className="each-card-body">
        <h5 className="each-card-title">{title}</h5>
        <p className="each-card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;