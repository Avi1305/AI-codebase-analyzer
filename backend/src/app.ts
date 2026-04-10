import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.route.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-codebase-analyzer-iota.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));




app.use(express.json());

app.use("/api", analyzeRoutes);



export default app;