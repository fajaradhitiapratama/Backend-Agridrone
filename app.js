const express = require("express");
const bodyParser = require("body-parser");

const coba = require("./routes/routes");
const cors = require("cors");

app = express();

const corsTypeTwo = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
};

app.use(cors());
app.use(corsTypeTwo);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
app.use("/router", coba);
const port = 8080;

app.listen(port, function () {
  console.log("Listening on port :" + port);
});

console.log("Conected");
