import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import productsRoutes from "./routes/product.route.js";
dotenv.config();

const app = express();
const PORT = process.env.Port || 8000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//middleware
app.use(express.json()); //allows us to parse incoming request :req.body
app.use(cookieParser()); //allows us to parse incoming cookies

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
  connectDB;
  console.log("Server is running on port 8000");
});

//
