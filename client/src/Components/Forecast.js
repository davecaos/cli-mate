import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Weather from "./Weather";
import { Columns } from "react-bulma-components";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Columns>
          <p>{this.props.city}</p>
        </Columns>
        <Columns>
          {this.props.forecast.map((forecast) => (
            <Columns.Column>
              <Weather
                size={3}
                id={forecast.weather.iconID}
                main={forecast.weather.main}
                temp={forecast.weather.temp.toFixed(1)}
              />
            </Columns.Column>
          ))}
        </Columns>
        <br />
      </>
    );
  }
}

export default Forecast;
