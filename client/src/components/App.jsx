import React from 'react';
import axios from 'axios';
import Recommended from './Recommended.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Recommended />
      </div>
    )
  }
}

export default App;