import React from "react";
import { Columns } from "react-bulma-components";
import WeatherIcon from "./WeatherIcon";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class Weather extends React.Component {
  constructor(props) {
    super(props);
    const date = this.formatDate();
    this.state  = {
      date 
    }
}

  formatDate(){
    return this.props.date && days[this.props.date.getDay()] + ' '+  ("0" + this.props.date.getDate()).slice(-2);
  }

  render() {
    return (
      <div>
        <Columns>{this.state.date}</Columns>
        <Columns><WeatherIcon id={this.props.id} size={this.props.size}/></Columns>
        <Columns>{this.props.temp + " °C "}</Columns>
        <Columns>{this.props.main}</Columns>
      </div>
    );
  }
}

export default Weather;
