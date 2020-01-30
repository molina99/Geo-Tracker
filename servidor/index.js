const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const geappRoute = require("./controllers/geapp.controller");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", geappRoute);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
