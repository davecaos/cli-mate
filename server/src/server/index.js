const http = require("http");
const express = require("express");
// Config
const config = require("../../config");

const { errorHandler } = require("./middleware");
const events = require("./events");
const { healthRouter, v1Router } = require("./routes");

const { port } = config.server;

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

module.exports = { app, server };
