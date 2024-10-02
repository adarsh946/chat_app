import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import dbConnect from "./db/dbConnect.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRoutes);
app.use("/api/v2", messageRoutes);
app.use("/api/v3", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  dbConnect();
  console.log(`server is running on port ${PORT}`);
});
