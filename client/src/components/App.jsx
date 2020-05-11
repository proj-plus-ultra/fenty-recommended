import React from 'react';
import Recommended from './Recommended';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
    this.getRandomProduct = this.getRandomProduct.bind(this);
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    const categories = ['TOOLS', 'FACE PRODUCT', 'LIP PRODUCT', 'EYE PRODUCT', 'BODY PRODUCT'];
    const pickRandom = Math.floor(Math.random() * categories.length);
    this.setState({
      category: categories[pickRandom],
    });
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <Recommended category={category} />
      </div>
    );
  }
}

export default App;
