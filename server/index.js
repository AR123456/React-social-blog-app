const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

/// routes will go here

// this will handle 404 errors
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// start the server
app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
