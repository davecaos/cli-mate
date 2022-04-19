import React from "react";

export default function WeatherIcon({ id , size}){
  return (
    <div className={`owf owf-${id} owf-${size}x owf-pull-left owf-border`}/>
  );
};

