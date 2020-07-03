import React from "react";

import API from "./api";
import "./App.css";
import Weather from "./Weather";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      currentCity: "",
      currentforecast: [],
    };
  }

  componentDidMount() {
    API.get("/current")
      .then((res) => res.data)
      .then(
        (data) => {
          let currentWeather = data.weather;
          this.setState({
            isLoaded: true,
            currentCity: data.city,
            main: currentWeather.main,
            description: currentWeather.description,
            iconID: currentWeather.id,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    API.get("/forecast")
      .then((res) => res.data)
      .then(
        (data) => {
          console.log(data)
          let hour = new Date(data[0].dt_txt).getHours() 
          let forecastFiltered =  data.filter(forecast => (new Date(forecast.dt_txt).getHours() ) ==  hour)
          let lastForecastAvailable = data[data.length -1]
          forecastFiltered.push(lastForecastAvailable)
          forecastFiltered.map(x => console.log(x))
          this.setState({
            isLoaded: true,
            //currentCity: data.city,
            currentforecast: forecastFiltered,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i class={`owf owf-${this.state.iconID} owf-1x owf-pull-left owf-border`}/>
          <p>
            {this.state.currentCity}
            <br />
            {this.state.description + " (" + this.state.main + ")"}
          </p>
          <br />
          <br />
          <br />
          {this.state.currentforecast.map((forecast) => (
            <Weather
              id={forecast.weather.id}
              main={forecast.weather.main}
              temp={forecast.weather.temp.toFixed(1)}
            />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
