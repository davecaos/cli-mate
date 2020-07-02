import React from 'react';

import API from './api';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      error: null,
      isLoaded: false,
      city: ''
    };
  }

  
  componentDidMount() {

    API.get("/location")
      .then(res => res.data)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            city: result.city
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <a>
          {this.state.city}
        </a>
      </header>
    </div>);
}
}

export default App;
