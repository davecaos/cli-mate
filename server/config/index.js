const config = {
    server: {
      port: 1337,
      killTimeout: 100
    },
    geolocationApi: {
      url: "https://api.ipgeolocation.io",
      apiFreeKey: "c3721591c90343e98620ee239d607fcb"
    },
    openWeatherApi: {
        weather: "http://api.openweathermap.org/data/2.5/weather",
        forecast: "http://api.openweathermap.org/data/2.5/forecast",
        apiFreeKey: "be099e83205a778778834643d8310f58"
    }
}

module.exports = {
  ...config,
};