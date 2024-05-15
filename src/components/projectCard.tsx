import React from 'react';

interface CardProps {
  title: string;
  imgUrl : string;
  description : string;
}

const Card: React.FC<CardProps> = ({ title, imgUrl, description,}) => {
  return (
    <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
  );
};

//<span>/piece</span>

export default Card;