const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const usersRouter = require("./routes/UserRoutes");
const connectDB = require("./config/db");

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());
app.use("/api", usersRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

connectDB();

module.exports = app;
