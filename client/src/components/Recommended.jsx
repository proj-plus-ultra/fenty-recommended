import React from 'react';
import axios from 'axios';
import RecommendedItem from './RecommendedItem.jsx';
import Slider from 'react-slick';


import ArrowPrev from './ArrowPrev.jsx';
import ArrowNext from './ArrowNext.jsx';

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
      for (let i = 0; i < 6; i++) {
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
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />
    }
    console.log(this.state.oneItem)
    return (
      <div className="recommended">
        <div id="recommended-carousel" value={this.props.category}>
          <h3 id="recommended-header">plays nice with</h3>
          <div id="recommended-product">
              <Slider {...settings}>
                  {this.state.carousel.map((item, index) => {
                    return (<div key={index}>
                      <RecommendedItem item={item} index={index} />
                    </div>)
                  })}
              </Slider>
          </div>
        </div>
      </div>
    )
  }
}

export default Recommended;
