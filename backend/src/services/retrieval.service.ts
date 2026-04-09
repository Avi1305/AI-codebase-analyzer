import { Pinecone } from "@pinecone-database/pinecone";
import { embeddings } from "./embeddings.service.js";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.Index(process.env.PINECONE_INDEX!);

export const searchRelevantCode = async (query: string) => {
  const queryEmbedding = await embeddings.embedQuery(query);

  const results = await index.query({
    vector: queryEmbedding,
    topK: 10,
    includeMetadata: true,
  });

  return results.matches;
};