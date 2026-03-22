const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes");

app.use("/courses", routes);

app.listen(3002, () => {
  console.log("Course service running on port 3002");
});