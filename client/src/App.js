import React from 'react';

import API from './api';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      error: null,
      isLoaded: false,
      currentCity: ''
    };
  }

  
  componentDidMount() {

    API.get("/current")
      .then(res => res.data)
      .then(
        (data) => {
          let [currentWeather] = data.weather
          this.setState({
            isLoaded: true,
            currentCity: data.city,
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

      API.get("/forecast")
      .then(res => res.data)
      .then(
        (data) => {
          let [currentWeather] = data
          currentWeather = currentWeather.weather[0]

          this.setState({
            isLoaded: true,
            currentCity: data.city,
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

        <i class={`owf owf-${this.state.iconID}`+ " owf-3x owf-pull-left owf-border"}></i>
        <p>
          {this.state.currentCity}
         <br/>
         {this.state.description + ' (' + this.state.main + ')'}
         </p>
      </header>
    </div>);
}
}

export default App;
