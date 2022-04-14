const process = require("process");
const config = require("config");

const { killTimeout } = config.get("server");

//On server internal error.
const onServerError = () => console.log({ message: `Server error` });

//On server start.
const onListen = (port) => {
  console.log(`Cli-Mate❄️  server - Running on port: (${port})`);
};

//When the process receive kill signal.
const onProcessKill = (server) => {
  console.log("Service termination signal received");

  setTimeout(() => {
    console.log("Finishing Cli-Mate❄️  server");
    server.close(() => process.exit(0));
  }, killTimeout);
};

//When in the server happen a uncaugth exception.
const onException = (err) => console.log({ message: err });

module.exports = {
  onListen,
  onProcessKill,
  onServerError,
  onException,
};
