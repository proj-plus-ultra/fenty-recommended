import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import RecommendedItem from './RecommendedItem';
import ArrowPrev from './ArrowPrev';
import ArrowNext from './ArrowNext';

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      carousel: [],
    };
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
          products: data.data,
        });
      })
      .then(() => {
        this.carouselItems();
      })
      .catch((err) => console.error(err));
  }

  carouselItems() {
    const filtered = [];
    const filterCategory = (products, category) => {
      products.map((product) =>
        product.category === category ? filtered.push(product) : null,
      );
    };
    filterCategory(this.state.products, this.props.category);
    const carouselItems = [];
    const pickSeven = (array) => {
      for (let i = 0; i < 6; i += 1) {
        const num = Math.floor(Math.random() * array.length);
        carouselItems.push(array[num]);
        array.splice(num, 1);
      }
    };
    pickSeven(filtered);
    this.setState({
      carousel: carouselItems,
    });
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />,
    };
    return (
      <div className="recommended">
        <div id="recommended-carousel" value={this.props.category}>
          <h3 id="recommended-header">plays nice with</h3>
          <div id="recommended-product">
            <Slider {...settings}>
              {this.state.carousel.map((item, index) => (
                <div key={index}>
                  <RecommendedItem item={item} index={index} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommended;
