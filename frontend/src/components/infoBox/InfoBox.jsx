import React from 'react';
import './InfoBox.scss';

const InfoBox = ({ title, count, icon }) => {
  return (
    <div className="info-box">
      <span className="info-icon">{icon}</span>
      <span className="info-text">
        <p>{title}</p>
        <h4>{count}</h4>
      </span>
    </div>
  );
};

export default InfoBox;
