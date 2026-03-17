const express = require("express");
const app = express();

//  Built-in middleware (parse JSON)
app.use(express.json());

//  Import custom middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

//  Use logger middleware (GLOBAL)
app.use(logger);

//  Import routes
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const studentRoutes = require("./routes/studentRoutes"); //  NEW

// Use routes (API endpoints)
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/students", studentRoutes); // NEW

// Error handling middleware (ALWAYS LAST)
app.use(errorHandler);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});