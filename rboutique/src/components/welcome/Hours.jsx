import React from 'react';
import './hours.css';

const Hours = props => {
  const {
    weekday,
    startTime,
    endTime,
    macaron1: {
      flavor: flavor1,
      img: flavor1Img },
    macaron2: {
      flavor: flavor2,
      img: flavor2Img },
    backgroundColor
  } = props;

  return (
    <div className="hours-wrapper">
      <div className="hours">
        <div>
          <span>{weekday}</span>
          <span>{`${startTime} - ${endTime}`}</span>
        </div>
        <div>
          <span>{flavor1}</span>
          <img src={flavor1Img} alt={flavor1} />
        </div>
        <div style={{
          backgroundColor,
          color: backgroundColor === "transparent" ? "#6a6969" : "#fff"
        }}>
          <span>{flavor2}</span>
          <img src={flavor2Img} alt={flavor2} />
        </div>
      </div>
    </div>
  );
}


export default Hours;