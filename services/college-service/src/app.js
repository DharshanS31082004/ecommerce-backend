const express = require("express");
const app = express();

app.use(express.json());

const routes = require("./routes");

app.use("/colleges", routes);

app.listen(3003, () => {
  console.log("College service running on port 3003");
});