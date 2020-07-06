import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import API from "../api";
import Weather from "./Weather";
import Loader from "./Loader";
import { Button, Columns } from "react-bulma-components";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentCity: this.props.city,
      currentforecast: [],
    };
  }

  componentDidMount() {
    this.getForecastFromAPI();
  }

  getForecastFromAPI() {
    this.setState({
      isLoaded: false,
    });

    API.get("/forecast/" + this.props.city.toLowerCase())
      .then((res) => res.data)
      .then(
        (result) => {
          const forecast = result.forecast;
          let firstWeatherSample = forecast[0].weather;
          const lastWeatherSample = forecast[forecast.length - 1];
          const firstWeatherSampleHour = new Date(firstWeatherSample.dt_txt).getHours();
          const firstWeatherSampleDate = new Date(firstWeatherSample.dt_txt).getDate();
          const TodayDate = new Date();
          let forecastFiltered =
            forecast.filter(
              (forecast) =>
                // we filter by the current hour to get a forecast at differents days, but in the same hours
                new Date(forecast.weather.dt_txt).getHours() === firstWeatherSampleHour
            ) || [];
          if(TodayDate.getDate() === firstWeatherSampleDate) {
            forecastFiltered.push(lastWeatherSample);
          }else {
            //we felt in the 21:00 ~ 23:59 of the current day, the first weather sample will be date + 1 fromm 00:00 hours
            //The first sample of the next day is barely the same for today (a day that almost is ended)
            let firstMockedWeatherSample = JSON.parse(JSON.stringify(firstWeatherSample));
            firstMockedWeatherSample.dt_txt = TodayDate.toISOString();
            forecastFiltered.unshift({weather: firstMockedWeatherSample});
          }
          this.setState({
            isLoaded: true,
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

  handleDeleteForecastClick = (event) => {
    event.preventDefault();
    this.props.handleDeleteForecastClick && this.props.handleDeleteForecastClick(this.props.city);
  };

  handleUpdateForecastClick = (event) => {
    event.preventDefault();
    this.getForecastFromAPI();
  };

  renderError404() {
    return (
      <>
        <Columns>
          <Columns.Column>
            <p>{`Error: the city ${this.props.city} was not found`}</p>
          </Columns.Column>
          <Columns.Column>
            <Button onClick={this.handleDeleteForecastClick}>Delete</Button>
          </Columns.Column>
        </Columns>
      </>
    );
  }

  render() {
    if (this.state.error) {
      return this.renderError404();
    }

    if (this.state.isLoaded) {
      return (
        <>
          <Columns>
            <p>{this.props.city}</p>
          </Columns>
          
          <Columns>
            {this.state.currentforecast.map((forecast, i) => (
              <Columns.Column>
                <Weather
                  key={i}
                  size={3}
                  id={forecast.weather.iconID}
                  main={forecast.weather.main}
                  date={new Date(forecast.weather.dt_txt)}
                  temp={forecast.weather.temp.toFixed(1)}
                />
              </Columns.Column>
            ))}
            {this.props.deletable && (<Columns.Column>
              <Button onClick={this.handleDeleteForecastClick}>Delete</Button>
            </Columns.Column>)}
            <Columns.Column>
              <Button onClick={this.handleUpdateForecastClick}>Update</Button>
            </Columns.Column>
          </Columns>
          <hr></hr>
        </>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Forecast;
