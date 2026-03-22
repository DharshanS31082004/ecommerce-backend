const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes");

app.use("/students", routes);

app.listen(3001, () => {
  console.log("Student service running on port 3001");
});