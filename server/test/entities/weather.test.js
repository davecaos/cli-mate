const { Weather } = require("../../src/entities/weather");

const weatherData = {
  id: 801,
  main: "Clouds",
  description: "few clouds",
  icon: "02d",
};
const weatherTemp = 32.03;
const iconID = 2643743;

const weatherApiResponse = {
  coord: { lon: -0.13, lat: 51.51 },
  weather: [weatherData],
  base: "stations",
  main: {
    temp: weatherTemp,
    feels_like: 32.94,
    temp_min: 31,
    temp_max: 33.33,
    pressure: 1013,
    humidity: 43,
  },
  visibility: 10000,
  wind: { speed: 2.6, deg: 80 },
  clouds: { all: 13 },
  dt: 1597064121,
  sys: {
    type: 1,
    id: 1414,
    country: "GB",
    sunrise: 1597034324,
    sunset: 1597087983,
  },
  timezone: 3600,
  id: iconID,
  name: "London",
  cod: 200,
};

describe("weather entity test", () => {
  it("test weather constructor", () => {
    let mainWeatherFromOWM = weatherApiResponse.weather[0];
    let temp = weatherApiResponse.main.temp;
    let dt_txt = "2020-08-11 00:00:00";
    let expectedResponse = {
      weather: { ...weatherData, temp: weatherTemp, dt_txt, iconID },
    };
    chai
      .expect(Weather(mainWeatherFromOWM, temp, dt_txt, iconID))
      .to.be.eql(expectedResponse);
  });
});
