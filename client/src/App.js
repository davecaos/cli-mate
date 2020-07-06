import React from "react";

import API from "./api";
import "./App.css";
import Loader from "./Components/Loader";
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
      inputForecasts: [],
      inputCity: "",
      inputCityCounter: 0
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
            isLoaded: true,
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
  }

  handleInputChange = (event) => {
    this.setState({ inputCity: event.target.value });
  };

  handleDeleteForecastClick = (cityToDelete) => {
    let clonedForecasts = this.state.inputForecasts.slice(0);
    let updatedForecasts = clonedForecasts.filter( city => city !== cityToDelete);
    this.setState({
      inputForecasts: updatedForecasts,
      inputCityCounter: this.state.inputCityCounter - 1,
    });
  }

  handleAddCityClick = (event) => {
    event.preventDefault();
    let isinputCityInvalid = ! this.state.inputCity
    if(isinputCityInvalid) {
      //do nothing
      return;
    }

    let clonedForecasts = this.state.inputForecasts.slice(0);
    clonedForecasts.push(this.state.inputCity);

    this.setState({
      inputForecasts: clonedForecasts,
      inputCityCounter: this.state.inputCityCounter + 1,
      inputCity: "",
    });
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div className="App">
            <Hero>
              <Section>
              <Columns>
              <div>{"Current weather in " + this.state.currentCity}</div>
              </Columns>
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
                <hr></hr>
                <Columns.Column>
                  <Forecast
                    city={this.state.currentCity}
                  />
                </Columns.Column>

                {this.state.inputForecasts.map((city) => (
                  <Columns.Column>
                    <Forecast city={city} deletable={true} handleDeleteForecastClick={(city) => this.handleDeleteForecastClick(city)}/>
                  </Columns.Column>
                ))}
                <Columns>
                  <Columns.Column>
                   <p>{`Enter up to ${5 - this.state.inputCityCounter} Cities name like London, Santa Fe, Berlin ...  to get next 5 days forecast!`}</p>
                    <input
                      value={this.state.inputCity}
                      onChange={this.handleInputChange}
                    />
                    {this.state.inputCityCounter < 5 && <Button onClick={this.handleAddCityClick}>Add</Button>}
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
            <Loader />
          </header>
        </div>
      );
    }
  }
}

export default App;
