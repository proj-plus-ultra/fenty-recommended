import React from 'react';

let ArrowNext = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="https://fenty-db.s3-us-west-1.amazonaws.com/Fenty+SS/nextArrow.png" alt="arrow_left"/>
    </div>
  );
};

export default ArrowNext;