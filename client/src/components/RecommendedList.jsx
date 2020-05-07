import React, {Fragment} from 'react';
import RecommendedItem from './RecommendedItem.jsx';

const RecommendedList = (props) => {
  return (
    <div className="recommended-product">
      {props.items.map((item, index) => {
        return <RecommendedItem item={item} key={index} index={index}/>
      })}
    </div>
  )
}

export default RecommendedList;