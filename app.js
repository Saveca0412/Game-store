const express = require("express");

const { usersRouter } = require("./routes/users.routes");
const { gamesRouter } = require("./routes/games.routes");
const { consolesRouter } = require("./routes/consoles.routes");

const { globalErrorHandler } = require("./controllers/error.controller");

const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/games", gamesRouter);
app.use("/api/v1/consoles", consolesRouter);

app.use(globalErrorHandler);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
