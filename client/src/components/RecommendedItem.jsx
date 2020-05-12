import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RecommendedItem extends React.Component {
  constructor(props) {
    super(props);
    const { foreground } = this.props.item;
    this.state = {
      picture: foreground,
      mouseOver: false,
    };
    this.onHover = this.onHover.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  onHover() {
    const { mouseOver } = this.state;
    const { background, foreground } = this.props.item;
    if (!mouseOver) {
      this.setState({
        picture: background,
      });
    } else {
      this.setState({
        picture: foreground,
      });
    }
  }

  toggleState() {
    const { mouseOver } = this.state;
    this.setState({
      mouseOver: !mouseOver,
    });
    this.onHover();
  }

  render() {
    const {
      fav,
      name,
      description,
      price,
      moreShades,
      ratingStar,
      ratingNum,
    } = this.props.item;
    return (
      <div className="recommended-column">
        <img
          id="recommended-img"
          src={this.state.picture}
          onMouseEnter={() => {
            this.toggleState();
          }}
          onMouseLeave={() => {
            this.toggleState();
          }}
          alt="OOPS"
        />
        <div id="recommended-fav">{fav ? "RIHANNA'S FAV" : null}</div>
        <div id="recommended-name">{name}</div>
        <div id="recommended-description">{description}</div>
        <div id="recommended-price">{price}</div>
        <div id="recommended-shades">{moreShades ? 'MORE SHADES +' : null}</div>
        <div id="recommended-rating">
          <StarRatingComponent
            name="rating"
            value={ratingStar}
            starColor="Black"
            emptyStarColor="Gray"
          />
          ({ratingNum})
        </div>
      </div>
    );
  }
}

export default RecommendedItem;
