const chai = require("chai");
const proxyquire = require("proxyquire");
const sinon = require("sinon");

const { locationAPI_URL } = require("../../entities/urls");

describe("urls entity test", () => {
  it("locationAPI_URL Localhost IP4 OK", async () => {
    const result = locationAPI_URL("127.0.0.1");
    chai.expect(result).to.be.eql("https://ipapi.co/json");
  });

  it("locationAPI_URL Localhost IP6 OK", async () => {
    const result = locationAPI_URL("::1");
    chai.expect(result).to.be.eql("https://ipapi.co/json");
  });
});
