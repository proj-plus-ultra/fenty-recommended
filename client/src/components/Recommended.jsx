import React from 'react';
import axios from 'axios';
import RecommendedList from './RecommendedList.jsx';
import Slider from "react-slick";

import StarRatingComponent from 'react-star-rating-component';


class Recommended extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      carousel: [],
      oneItem: ''
    }
    this.getProducts = this.getProducts.bind(this);
    this.carouselItems = this.carouselItems.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios
    .get('/fenty/products')
    .then((data) => {
      this.setState({
        products: data.data
      })
    })
    .then(() => {
      this.carouselItems();
    })
    .catch(err => console.error(err))
  }

  carouselItems() {
    let filtered = [];
    const filterCategory = (products, category) => {
      products.map((product) =>
        (product.category === category) ? filtered.push(product) : null
      )
    };
    filterCategory(this.state.products, this.props.category);
    let carouselItems = [];
    const pickSeven = (array) => {
      for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * array.length);
        carouselItems.push(array[num]);
        array.splice(num, 1);
      }
    };
    pickSeven(filtered);
    this.setState({
      carousel: carouselItems,
      oneItem: carouselItems[0]
    });
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    }
    console.log(this.state.oneItem)
    return (
      <div className="recommended">
        <div id="recommended-carousel" value={this.props.category}>
          <h3 id="recommended-header">plays nice with</h3>
          <div>
            <Slider {...settings}>
              <div>
                <img id="recommended-img" src={this.state.oneItem.foreground}/>
                <div id="recommended-fav">{(this.state.oneItem.fav)? "RIHANNA'S FAV" : null}</div>
                <div id="recommended-name">{this.state.oneItem.name}</div>
                <div id="recommended-description">{this.state.oneItem.description}</div>
                <div id="recommended-price">{this.state.oneItem.price}</div>
                <div id="recommended-shades">{(this.state.oneItem.more_shades) ? "MORE SHADES +" : null}</div>
                <div id="recommended-rating"><StarRatingComponent name={'rating'} value={this.state.oneItem.rating_star} starColor={"Black"} emptyStarColor={"Gray"}/> ({this.state.oneItem.rating_num})</div>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>

            </div>
          </div>
      </div>
    )
  }
}

export default Recommended;
