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

app.use("/api/auth", authRoutes);
app.use("/api/messeges", messageRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  dbConnect();
  console.log(`server is running on port ${PORT}`);
});
