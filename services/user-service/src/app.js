const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes");

app.use("/users", routes);

app.listen(3004, () => {
  console.log("User service running on port 3004");
});