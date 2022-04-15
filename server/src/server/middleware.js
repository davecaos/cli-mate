function setClientIpMiddleware(req, _res, next) {
  let ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    "127.0.0.1";

  if (ip.substr(0, 7) === "::ffff:") {
    ip = ip.substr(7);
  }
  req.headers["ClimateClientIP"] = ip;
  next();
}

const errorHandler = (err, req, res, next) => {
  //Return bad gateway if the error come with a status code.
  const status = err && err.statusCode ? 502 : 500;

  //Get detail.
  const message = err && err.message ? err.message : "Internal server Error";

  res.status(status).json({
    status,
    message,
  });
};
module.exports = { errorHandler, setClientIpMiddleware };
