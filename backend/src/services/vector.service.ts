import { Pinecone } from "@pinecone-database/pinecone";
import { embeddings } from "./embeddings.service.js";
import { chunkFiles } from "./chunk.service.js";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index({
    name:process.env.PINECONE_INDEX!
});

export const storeEmbeddings = async (files: any[]) => {
  
  const chunks = await chunkFiles(files);

  const vectors = await Promise.all(
    chunks.map(async (chunk, i) => {
      const embedding = await embeddings.embedQuery(chunk.pageContent);

      return {
        id: `chunk-${i}`,
        values: embedding,
        metadata: {
          filePath: chunk.metadata.filePath,
          content: chunk.pageContent,
        },
      };
    })
  );

  await index.upsert({records:vectors});
};