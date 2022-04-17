const {
  locationUrlBuilder,
  currentOpenWeatherUrlBuilder,
  forecastOpenWeatherUrlBuilder,
} = require("../../src/lib/helpers/urls.helper");

const fakeGeoUrl = "https://api.ipgeolocation.fake";
const fakeopenWeatherApi = "http://api.openweathermap.org/weather";
const fakeopenForecastApi = "http://api.openweathermap.org/forecast";
const fakeApiKey = "<some-api-key-UUID>";

jest.mock("../../config", () => ({
  geolocationApi: {
    url: fakeGeoUrl,
    apiFreeKey: fakeApiKey,
  },
  openWeatherApi: {
    apiFreeKey: fakeApiKey,
    weather: fakeopenWeatherApi,
    forecast: fakeopenForecastApi,
  },
}));

describe("urls helpers tests", () => {
  const locationLocalhostUrl = `${fakeGeoUrl}/ipgeo?apiKey=${fakeApiKey}&fields=city`;
  it("should locationUrlBuilder called with Localhost IP4 ip return expected url OK", async () => {
    const result = locationUrlBuilder("127.0.0.1");
    expect(result).toStrictEqual(locationLocalhostUrl);
  });

  it("should locationUrlBuilder called with Localhost IP6 ip return expected url OK", async () => {
    const result = locationUrlBuilder("::1");
    expect(result).toStrictEqual(locationLocalhostUrl);
  });

  it("should locationUrlBuilder called with no Localhost IP return expected url ip query parameter OK", async () => {
    const noLocalhostIp = "182.128.222.166";
    const result = locationUrlBuilder(noLocalhostIp);
    expect(result).toStrictEqual(locationLocalhostUrl + `&ip=${noLocalhostIp}`);
  });

  describe("currentOpenWeatherUrlBuilder tests", () => {
    const city = 'Sao Paulo'
    const weatherApiUrl = `${fakeopenWeatherApi}?q=${city}&units=metric&appid=${fakeApiKey}`;
    it("should currentOpenWeatherUrlBuilder built the expected url OK", async () => {
      const result = currentOpenWeatherUrlBuilder(city);
      expect(result).toStrictEqual(weatherApiUrl);
    });
  });

  describe("forecastOpenWeatherUrlBuilder tests", () => {
    const city = 'Durazno'
    const forecastrApiUrl = `${fakeopenForecastApi}?q=${city}&units=metric&appid=${fakeApiKey}`;
    it("should forecastOpenWeatherUrlBuilder built the expected url OK", async () => {
      const result = forecastOpenWeatherUrlBuilder(city);
      expect(result).toStrictEqual(forecastrApiUrl);
    });
  });
});
