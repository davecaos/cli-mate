import React from "react";
import { Columns } from "react-bulma-components";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Columns>
        <i
          class={`owf owf-${this.props.id} owf-${this.props.size}x owf-pull-left owf-border`}
        ></i></Columns>
        <p>
          <Columns>{this.props.temp + "°C "}</Columns>
          <Columns>{this.props.main}</Columns>
        </p>
      </div>
    );
  }
}

export default Weather;
