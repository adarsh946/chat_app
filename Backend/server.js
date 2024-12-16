import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";

import dbConnect from "./db/dbConnect.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  dbConnect();
  console.log(`server is running on port ${PORT}`);
});
