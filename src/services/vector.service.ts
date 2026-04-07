import { Pinecone } from "@pinecone-database/pinecone";
import { embeddings } from "./embeddings.service.js";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index({
    name:process.env.PINECONE_INDEX!
});

export const storeEmbeddings = async (files: any[]) => {
  const vectors = [];

  for (let i = 0; i < files.length; i++) {
    const embedding = await embeddings.embedQuery(files[i].content);

    vectors.push({
      id: `file-${i}`,
      values: embedding,
      metadata: {
        filePath: files[i].filePath,
        content: files[i].content,
      },
    });
  }

  await index.upsert({records:vectors});
};