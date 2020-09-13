/*const request = require("supertest");
const { app } = require("../server");
const sampleCity = "Buenos Aires";
const falseCity = "Qwerty Uiop";

const checkWeatherEntity = (weatherResponse) => {
  let weatherProps = ["main", "description", "icon", "temp", "iconID"];
  expect(weatherResponse).toHaveProperty("weather");
  weatherProps.forEach((prop) =>
    expect(weatherResponse.weather).toHaveProperty(prop)
  );
};

const checkForecastEntity = (forecastResponse) => {
  expect(forecastResponse).toHaveProperty("forecast");
  expect(forecastResponse.forecast.length).toEqual(40);
  forecastResponse.forecast.forEach((weather) => checkWeatherEntity(weather));
};
test("Status OK", async () => {
  const response = await request(app).get("/status");
  expect(response.statusCode).toBe(200);
});

test("Location OK", async () => {
  const response = await request(app).get("/v1/location");
  expect(response.statusCode).toBe(200);
  expect(response.body.city).toBe(sampleCity);
});

test("Current local weather OK", async () => {
  const response = await request(app).get("/v1/current/" + sampleCity);
  expect(response.statusCode).toBe(200);

  expect(response.body).toHaveProperty("weather");
  let weatherResponse = response.body;
  checkWeatherEntity(weatherResponse);
});

test("Current local weather by false city Error 404", async () => {
  const response = await request(app).get("/v1/current/" + falseCity);
  expect(response.statusCode).toBe(404);
});

test("Current weather by city OK", async () => {
  const response = await request(app).get("/v1/current/" + sampleCity);
  expect(response.statusCode).toBe(200);
});

test("local forecast OK", async () => {
  const response = await request(app).get("/v1/forecast/");
  expect(response.statusCode).toBe(200);
  let forecastResponse = response.body;
  checkForecastEntity(forecastResponse);
});

test("forecast weather by city OK", async () => {
  const response = await request(app).get("/v1/forecast/" + sampleCity);
  expect(response.statusCode).toBe(200);
});

test("forecast weather by false city Error 404", async () => {
  const response = await request(app).get("/v1/forecast/" + falseCity);
  expect(response.statusCode).toBe(404);
});*/
