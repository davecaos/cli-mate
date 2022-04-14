const { locationAPI } = require("../../src/lib/helpers/urls");

const fakeGeolocationUrl = "https://api.ipgeolocation.fake";
const fakeApiKey = "<some-api-key-UUID>";

jest.mock("../../config/default.json", () => ({
  "geolocation-api": {
    url: fakeGeolocationUrl,
    apiFreeKey: fakeApiKey,
  },
}));

describe("urls entity test", () => {
  it("locationAPI Localhost IP4 OK", async () => {
    const result = locationAPI("127.0.0.1");
    expect(result).toStrictEqual("https://ipapi.co/json");
  });

  it("locationAPI Localhost IP6 OK", async () => {
    const result = locationAPI("::1");
    expect(result).toStrictEqual("https://ipapi.co/json");
  });
});
