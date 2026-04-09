import { chatWithRepo } from "../services/chat.service.js";
import { type Request,type Response } from "express";

export const chatWithRepository = async (req:Request, res:Response) => {
  const { question } = req.body;

  const answer = await chatWithRepo(question);

  res.json({ answer });
}