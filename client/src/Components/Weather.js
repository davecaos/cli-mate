import React from "react";
import { Columns } from "react-bulma-components";

const days = ["Sun", "Mon", "Tue", "We", "Thu", "Fri", "Sat"];

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
        <Columns>
          <div className={`owf owf-${this.props.id} owf-${this.props.size}x owf-pull-left owf-border`}/>
        </Columns>
        <Columns>{this.props.temp + "°C "}</Columns>
        <Columns>{this.props.main}</Columns>
      </div>
    );
  }
}

export default Weather;
