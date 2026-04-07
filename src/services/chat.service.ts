import { searchRelevantCode } from "./retrieval.service.js";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GOOGLE_API_KEY!,
});

export const chatWithRepo = async (question: string) => {
  const matches = await searchRelevantCode(question);

  const context = matches
    ?.map((m) => m.metadata?.content)
    .join("\n\n");

  const prompt = `
Answer based on this code:

${context}

Question: ${question}
`;

  const response = await model.invoke(prompt);

  return response.content;
};