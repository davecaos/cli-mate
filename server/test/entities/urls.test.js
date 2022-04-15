const {
  locationAPI,
  currentOpenWeatherUrlByCity,
  forecastOpenWeatherUrlByCity,
} = require("../../src/lib/helpers/urls");

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
  it("should locationAPI called with Localhost IP4 ip return expected url OK", async () => {
    const result = locationAPI("127.0.0.1");
    expect(result).toStrictEqual(locationLocalhostUrl);
  });

  it("should locationAPI called with Localhost IP6 ip return expected url OK", async () => {
    const result = locationAPI("::1");
    expect(result).toStrictEqual(locationLocalhostUrl);
  });

  it("should locationAPI called with no Localhost IP return expected url ip query parameter OK", async () => {
    const noLocalhostIp = "182.128.222.166";
    const result = locationAPI(noLocalhostIp);
    expect(result).toStrictEqual(locationLocalhostUrl + `&ip=${noLocalhostIp}`);
  });

  describe("currentOpenWeatherUrlByCity tests", () => {
    const city = 'Sao Paulo'
    const weatherApiUrl = `${fakeopenWeatherApi}?q=${city}&units=metric&appid=${fakeApiKey}`;
    it("should currentOpenWeatherUrlByCity called with Localhost ip return expected url OK", async () => {
      const result = currentOpenWeatherUrlByCity(city);
      expect(result).toStrictEqual(weatherApiUrl);
    });
  });

  describe("forecastOpenWeatherUrlByCity tests", () => {
    const city = 'Durazno'
    const forecastrApiUrl = `${fakeopenForecastApi}?q=${city}&units=metric&appid=${fakeApiKey}`;
    it("should forecastOpenWeatherUrlByCity called with a Localhost ip return expected url OK", async () => {
      const result = forecastOpenWeatherUrlByCity(city);
      expect(result).toStrictEqual(forecastrApiUrl);
    });
  });
});
