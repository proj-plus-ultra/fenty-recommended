import React from 'react';

const ArrowPrev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        src="https://fenty-db.s3-us-west-1.amazonaws.com/Fenty+SS/prevArrow.png"
        alt="arrow_left"
      />
    </div>
  );
};

export default ArrowPrev;
