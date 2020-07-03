import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <i class={`owf owf-${this.props.id} owf-1x owf-pull-left owf-border`}></i>
        <p>
          {this.props.temp + "°C "}
          {this.props.main}
        </p>
      </>
    );
  }
}

export default Weather;
