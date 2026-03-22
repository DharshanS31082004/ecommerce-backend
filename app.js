const express = require("express");
const app = express();

//  Built-in middleware (parse JSON)
app.use(express.json());

//  Import custom middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

//  Use logger middleware (GLOBAL)
app.use(logger);

//  OLD ROUTES (keep them)
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const studentRoutes = require("./routes/studentRoutes");

//  NEW SERVICES (IMPORTANT)
const studentService = require("./services/student-service/routes");
const courseService = require("./services/course-service/src/routes");
const collegeService = require("./services/college-service/src/routes");
const userService = require("./services/user-service/src/routes");

//  Use OLD routes
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/students-old", studentRoutes); // renamed to avoid conflict

//  Use NEW service routes (MAIN TASK)
app.use("/students", studentService);
app.use("/courses", courseService);
app.use("/colleges", collegeService);
app.use("/users", userService);

//  Error handling middleware (ALWAYS LAST)
app.use(errorHandler);

//  Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});