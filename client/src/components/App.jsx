import React from 'react';
import Recommended from './Recommended.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ''
    }
    this.getRandomProduct = this.getRandomProduct.bind(this);
  }

  componentDidMount() {
    this.getRandomProduct();
  }

  getRandomProduct() {
    let categories = ['TOOLS', 'FACE PRODUCT', 'LIP PRODUCT', 'EYE PRODUCT', 'BODY PRODUCT'];
    let pickRandom = Math.floor(Math.random() * categories.length);
    this.setState({
      category: categories[pickRandom]
    })
  }

  render() {
    return (
      <div>
        <Recommended category={this.state.category}/>
      </div>
    )
  }
}

export default App;