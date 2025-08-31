import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import connectDB from "./src/config/db.js";

dotenv.config(); // Load environment variables from .env
connectDB(); // Connect to MongoDB

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "dev") {
  app.use(morgan);
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Smart LMS app listening on port ${port}`);
});
