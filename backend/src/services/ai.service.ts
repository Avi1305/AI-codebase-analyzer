import {config} from "dotenv";
config();


import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 0.3,
  apiKey: process.env.MISTRAL_API_KEY!, // ✅ important
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
You are a strict JSON generator.

Return ONLY valid JSON. No explanation. No extra text.

Format:
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

    const raw = response.content as string;

    // ✅ Clean markdown
    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // ✅ Extract JSON safely
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      console.warn("⚠️ No JSON found, returning fallback");
      return {
        summary: cleaned,
        techStack: [],
        description: "Fallback response (no JSON detected)",
      };
    }

    try {
      return JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.warn("⚠️ JSON parse failed, returning fallback");
      return {
        summary: cleaned,
        techStack: [],
        description: "Fallback response (invalid JSON)",
      };
    }

  } catch (error) {
    console.error("AI Error:", error);

    // ✅ Never crash API
    return {
      summary: "AI failed to generate summary",
      techStack: [],
      description: "Error occurred during AI processing",
    };
  }
};