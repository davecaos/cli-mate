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

    API.get("/current")
      .then(res => res.data)
      .then(
        (result) => {
          let [currentWeather] = result.weather
          this.setState({
            isLoaded: true,
            city: result.city,
            main: currentWeather.main,
            description: currentWeather.description,
            iconID: currentWeather.id
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

        <i class={`owf owf-${this.state.iconID}`  + " owf-2x owf-pull-left owf-border"}></i>
        <p>
          {this.state.city}
         <br/>
         {this.state.description + ' (' + this.state.main + ')'}
         </p>
      </header>
    </div>);
}
}

export default App;
