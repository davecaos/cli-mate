import React from "react";

import API from "./api";
import "./App.css";
import Weather from "./Components/Weather";
import Forecast from "./Components/Forecast";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button, Hero, Columns, Section } from "react-bulma-components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      currentCity: "",
      temp: 0,
      currentforecast: [],
      inputForecasts: [],
      inputCity: "",
    };
  }

  componentDidMount() {
    API.get("/location/")
      .then((res) => res.data)
      .then(
        (data) => {
          let currentCity = data.city;
          this.setState({
            currentCity,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    API.get("/current")
      .then((res) => res.data)
      .then(
        (data) => {
          let current = data.weather;
          this.setState({
            main: current.main,
            temp: current.temp.toFixed(1),
            description: current.description,
            iconID: current.iconID,
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
          let forecast = result.forecast;
          let hour = new Date(forecast[0].weather.dt_txt).getHours();
          let forecastFiltered =
            forecast.filter(
              (forecast) => new Date(forecast.weather.dt_txt).getHours() == hour
            ) || [];
          let lastForecastAvailable = forecast[forecast.length - 1];
          forecastFiltered.push(lastForecastAvailable);
          forecastFiltered.map((x) => console.log(x));

          this.setState({
            isLoaded: true,
            //currentCity: data.city,
            currentforecast: forecastFiltered,
          });
        },

        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  handleInputChange = (event) => {
    this.setState({ inputCity: event.target.value });
  };

  handleAddCityClick = (event) => {
    event.preventDefault();
    API.get("/forecast/" + this.state.inputCity)
      .then((res) => res.data)
      .then(
        (result) => {
          let forecast = result.forecast;
          let hour = new Date(forecast[0].weather.dt_txt).getHours();
          let forecastFiltered =
            forecast.filter(
              (forecast) => new Date(forecast.weather.dt_txt).getHours() == hour
            ) || [];
          let lastForecastAvailable = forecast[forecast.length - 1];
          forecastFiltered.push(lastForecastAvailable);
          forecastFiltered.map((x) => console.log(x));
          let clonedForecasts = this.state.inputForecasts.slice(0);
          clonedForecasts.push({
            city: this.state.inputCity,
            forecast: forecastFiltered,
          });

          this.setState({
            //currentCity: data.city,
            inputForecasts: clonedForecasts,
            inputCity: "",
          });
        },

        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div className="App">
            <br />

            <Hero>
              <Section>
                <Columns>
                  <Columns.Column>
                    <Weather
                      size={5}
                      id={this.state.iconID}
                      main={this.state.main}
                      temp={this.state.temp}
                    />
                  </Columns.Column>
                </Columns>
                <Columns.Column>
                  <Forecast
                    city={this.state.currentCity}
                    forecast={this.state.currentforecast}
                  />
                </Columns.Column>

                {this.state.inputForecasts.map((item) => (
                  <Columns.Column>
                    <Forecast city={item.city} forecast={item.forecast} />
                  </Columns.Column>
                ))}
                <Columns>
                  <Columns.Column>
                    <input
                      value={this.state.inputCity}
                      placeholder={"City to get next 5 days forecast"}
                      onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleAddCityClick}>Add</Button>
                  </Columns.Column>
                </Columns>
              </Section>
            </Hero>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <header className="App">
            <p>Loading ...</p>
          </header>
        </div>
      );
    }
  }
}

export default App;
