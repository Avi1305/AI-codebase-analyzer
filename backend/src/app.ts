import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.route.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173", // local dev
    "https://your-app.vercel.app" // deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/api", analyzeRoutes);



export default app;