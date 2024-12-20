import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import express from "express";

import dbConnect from "./db/dbConnect.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
// import cors from "cors";

dotenv.config();

const __dirname = path.resolve();

// app.use(cors({ origin: "http://localhost:8000" }));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  dbConnect();
  console.log(`server is running on port ${PORT}`);
});
