import {config} from "dotenv";
config();


import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.3,
  apiKey: process.env.GOOGLE_API_KEY!, // ✅ important
});

export const generateSummary = async (files: any[]) => {
  try {
    const importantFiles = files.slice(0, 5);

    const context = importantFiles
      .map(
        (file) =>
          `File: ${file.filePath}\nCode:\n${file.content}\n`
      )
      .join("\n");

    const prompt = `
You are a senior software engineer.

Analyze this codebase and return JSON:

{
  "summary": "",
  "techStack": [],
  "description": ""
}

Codebase:
${context}
`;

    const response = await model.invoke([
      new HumanMessage(prompt),
    ]);

    return response.content;
  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
};