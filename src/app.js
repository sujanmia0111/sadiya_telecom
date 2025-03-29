const express = require("express");
const path = require("path");

const applyMiddlewares = require("@root/middlewares");
const routes = require("@root/routes");


const app = express();
applyMiddlewares(app);

// send static files react build folder
app.use(express.static(path.join(__dirname, "dist")));



// routes
app.use(routes);


// Serve React build folder
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});



// server is ready
app.use("/api/v1/ok", (_req, res, _next) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

// Global Error Handler @TODO -- all error handler
app.use((err, _req, res, _next) => {
  console.log(err);

  // MongoDB CastError
  if (err.name === "CastError") {
    err.status = 404;
    err.error = "Not Found";
    err.response = {
      code: err.status,
      error: err.error,
      message: `Resource not found. invalid:${err.path}:${err.value}`,
    };
  }

  if (err.name === "ValidationError") {
    err.status = 400;
    err.error = "Bad Request";
    err.response = {
      code: err.status,
      error: err.error,
      message: err.message,
    };
  }

  if (err.code === 11000) {
    err.status = 400;
    err.error = "Bad Request";
    err.response = {
      code: err.status,
      error: err.error,
      message: err.message,
    };
  }

  if (err.name === "JsonWebTokenError") {
    err.status = 401;
    err.error = "Unauthorized";
    err.response = {
      code: err.status,
      error: err.error,
      message: err.message,
    };
  }

  if (err.name === "TokenExpiredError") {
    err.status = 401;
    err.error = "Unauthorized";
    err.response = {
      code: err.status,
      error: err.error,
      message: err.message,
    };
  }

  const internalServerError = {
    code: 500,
    error: "Internal Server Error",
    message: "Internal Server Error",
  };

  // console.log(err.response);

  res.status(err.status || 500).json(err.response || internalServerError);
});

module.exports = app;