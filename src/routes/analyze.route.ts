import { Router } from "express";
import { analyzeRepo } from "../controllers/analyze.controller.js";
import { chatWithRepo } from "../services/chat.service.js";
import { chatWithRepository } from "../controllers/chat.controller.js";

const router = Router();

router.post("/analyze", analyzeRepo);

router.post("/chat",chatWithRepository );

export default router;