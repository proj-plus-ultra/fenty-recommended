import React from 'react';
import RecommendedItem from './RecommendedItem.jsx'

const RecommendedList = (props) => {
  return (
    <div>
      {props.items.map((item, index) => {
        console.log(item)
        return <RecommendedItem item={item} key={index} index={index}/>
      })}
    </div>
  )
}

export default RecommendedList;