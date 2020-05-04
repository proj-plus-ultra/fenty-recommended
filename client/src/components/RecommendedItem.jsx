import React from 'react';

class RecommendedItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  render() {
    return (
      <div>
        <span id="prod1">
        <img src={this.props.item.foreground}></img>
        <div>Rihanna's Fav?</div>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
        <div>{this.props.item.rating_star} ({this.props.item.rating_num})</div>
      </span>
      </div>
    )
  }
}

export default RecommendedItem;