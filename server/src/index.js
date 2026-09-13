import express from "express";
import ENV from "./config/env.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import { setServers } from "node:dns/promises";
import bookRouter from "./routes/books.route.js";

//override windows DNS server for succesful mongo URI resolution
setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

app.use(express.json());

//api health check
app.use("/api/health", (req, res) => {
  res.status(200).json({
    message: "API is running",
    version: "1.0.0",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    status: "OK",
  });
});

app.use("/api/v1/books", bookRouter);

//error routes
app.use(notFound);
app.use(errorHandler);

//connect to db and start server if cnnection is succesful
const startServer = async () => {
  try {
    const conn = await connectDB();
    if (conn.readyState === 1) {
      console.log("Database connected succesfuly");
      app.listen(ENV.PORT, () => {
        console.log(`Server running on http://localhost:${ENV.PORT}`);
      });
    } else {
      console.error("Database connection failed");
      process.exit(1);
    }
  } catch (error) {
    console.error("Failed to start server");
    process.exit(1);
  }
};

startServer();
