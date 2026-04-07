import { type Request,type Response } from "express";
import { cloneRepository } from "../services/github.service.js";
import { readFilesFromRepo } from "../services/file.service.js";
import { generateSummary } from "../services/ai.service.js";

export const analyzeRepo = async (req: Request, res: Response) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({ error: "Repo URL is required" });
    }

    const repoPath = await cloneRepository(repoUrl);

    const files = await readFilesFromRepo(repoPath);
    const summary = await generateSummary(files);

    return res.json({
      success: true,
      totalFiles: files.length,
      summary,
      files,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};