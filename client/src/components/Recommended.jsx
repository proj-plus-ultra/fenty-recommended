import React from 'react';
import axios from 'axios';
import RecommendedList from './RecommendedList.jsx';

class Recommended extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      carousel: []
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
      for (let i = 0; i < 7; i++) {
        let num = Math.floor(Math.random() * array.length);
        carouselItems.push(array[num]);
        array.splice(num, 1);
      }
    };
    pickSeven(filtered);
    this.setState({
      carousel: carouselItems
    });
  }

  render() {
    return (
      <div className="recommended">
        <h3 id="header">plays nice with</h3>
        <span id="carousel">
          <RecommendedList items={this.state.carousel}/>
        </span>
      </div>
    )
  }
}

export default Recommended;