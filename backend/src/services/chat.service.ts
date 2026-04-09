import { searchRelevantCode } from "./retrieval.service.js";
import { ChatMistralAI } from "@langchain/mistralai";

const model = new ChatMistralAI({
  model: "mistral-large-latest",
  apiKey: process.env.MISTRAL_API_KEY!,
});

export const chatWithRepo = async (question: string) => {
  const matches = await searchRelevantCode(question);

  const context = matches
    ?.map((m) => m.metadata?.content)
    .join("\n\n");

 const prompt = `
You are a codebase assistant.

ONLY answer based on the provided code context.

If the answer is not present, say:
"I could not find this in the codebase."

Context:
${context}

Question:
${question}
`;

  const response = await model.invoke(prompt);

  return response.content;
};