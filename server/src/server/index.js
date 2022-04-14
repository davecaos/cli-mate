const http = require("http");
const express = require("express");
const config = require("config");

const { errorHandler } = require("./middleware");
const events = require("./events");
const { healthRouter, v1Router } = require("./routes");

const { port } = config.get("server");

app = express();
const server = http.createServer(app);

//Bind the api routes.
app.use("/v1", v1Router);
app.use("/health", healthRouter);

//Bind error handler middleware.
app.use(errorHandler);

//Start listen mode.
app.listen(port, () => events.onListen(port));

//Define server "special" event to handle situations.
server.on("error", events.onServerError);
process.on("SIGINT", () => events.onProcessKill(server));
process.on("SIGTERM", () => events.onProcessKill(server));
process.on("unhandledRejection", events.onException);
process.on("uncaughtException", (err) => events.onException(err));
/*
const server = app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });
*/
module.exports = { app, server };
