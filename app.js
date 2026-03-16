const express = require("express");
const app = express();

app.use(express.json());

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(categoryRoutes);
app.use(productRoutes);
app.use(orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});