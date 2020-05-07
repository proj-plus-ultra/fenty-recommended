import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RecommendedItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: this.props.item.foreground,
      mouseOver: false
    }
    this.onHover = this.onHover.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  onHover() {
    if (!this.state.mouseOver) {
      this.setState({
        picture: this.props.item.background
      })
    } else {
      this.setState({
        picture: this.props.item.foreground
      })
    }
  }

  toggleState() {
    this.setState({
      mouseOver: !this.state.mouseOver
    })
    this.onHover();
  }

render() {
  return (
    <div className="recommended-column">
      <img id="recommended-img"src={this.state.picture} onMouseEnter={() => {this.toggleState()}} onMouseLeave={() => {this.toggleState()}}/>
      <div id="recommended-fav">{(this.props.item.fav)? "RIHANNA'S FAV" : null}</div>
      <div id="recommended-name">{this.props.item.name}</div>
      <div id="recommended-description">{this.props.item.description}</div>
      <div id="recommended-price">{this.props.item.price}</div>
      <div id="recommended-shades">{(this.props.item.more_shades)? "MORE SHADES +" : null}</div>
      <div id="recommended-rating"><StarRatingComponent name={'rating'} value={this.props.item.rating_star} starColor={"Black"} emptyStarColor={"Gray"}/> ({this.props.item.rating_num})</div>
  </div>
  )
}
}

export default RecommendedItem;