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
          let current = data;

          console.log('currentWeather', current)
          this.setState({
            isLoaded: true,
            currentCity: data.city,
            main: current.weather.main,
            description: current.weather.description,
            iconID: current.weather.iconID,
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
        (result) => {
          let forecast = result.forecast
          let hour = new Date(forecast[0].weather.dt_txt).getHours() 
          let forecastFiltered =  forecast.filter(forecast => (new Date(forecast.weather.dt_txt).getHours() ) == hour) || [];
          let lastForecastAvailable = forecast[forecast.length -1]
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
        <br />
          <i class={"owf owf-" +this.state.iconID+" owf-1x owf-pull-left owf-border"}/>
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
              id={forecast.weather.iconID}
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
