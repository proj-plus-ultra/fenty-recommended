import React from 'react';

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
      <div>
        <span>
        <img id="recommended-img"src={this.state.picture} onMouseEnter={() => {this.toggleState()}} onMouseLeave={() => {this.toggleState()}}></img>
        <div id="recommended-fav">{(this.props.item.fav)? "RIHANNA'S FAV" : null}</div>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.price}</div>
        <div>{this.props.item.rating_star} ({this.props.item.rating_num})</div>
      </span>
      </div>
    )
  }
}

export default RecommendedItem;