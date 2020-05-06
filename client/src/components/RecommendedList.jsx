import React from 'react';
import RecommendedItem from './RecommendedItem.jsx';

const RecommendedList = (props) => {
  return (
    <span className="recommended-product">
      {props.items.map((item, index) => {
        return <RecommendedItem item={item} key={index} index={index}/>
      })}
    </span>
  )
}

export default RecommendedList;