const chai = require("chai");
const { Forecast } = require("../../entities/forecast");

const wheaterInnerApiResponse = {
  dt: 1597104000,
  main: {
    temp: 24.4,
    feels_like: 26.01,
    temp_min: 24.4,
    temp_max: 24.91,
    pressure: 1015,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 62,
    temp_kf: -0.51,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03n",
    },
  ],
  clouds: { all: 44 },
  wind: { speed: 0.89, deg: 89 },
  visibility: 10000,
  pop: 0.02,
  sys: { pod: "n" },
  dt_txt: "2020-08-11 00:00:00",
};

const weatherTemp = 24.4;
const iconID = 802;

const weatherInnerResponseData = {
  weather: {
    id: 802,
    dt_txt: "2020-08-11 00:00:00",
    main: "Clouds",
    description: "scattered clouds",
    icon: "03n",
    iconID: iconID,
    temp: weatherTemp,
  },
};

const forecast40weathersList = () => {
  let weatherlist = [];
  for (let i = 0; i < 40; i++) {
    weatherlist.push(wheaterInnerApiResponse);
  }
  return weatherlist;
};

const forecastApiResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: forecast40weathersList(),
  city: {
    id: 2643743,
    name: "London",
    coord: { lat: 51.5085, lon: -0.1257 },
    country: "GB",
    population: 1000000,
    timezone: 3600,
    sunrise: 1597120818,
    sunset: 1597174269,
  },
};

describe("forecast entity test", () => {
  it("test forecast constructor", () => {
    let response = Forecast(forecastApiResponse.list);
    response.forecast.map((weather) => {
      chai.expect(weather).to.be.eql(weatherInnerResponseData);
    });
  });
});
