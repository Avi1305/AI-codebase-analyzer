import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const chunkFiles = async (files: any[]) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,     // 🔥 important
    chunkOverlap: 100,  // 🔥 keeps context
  });

  let chunks: any[] = [];

  for (const file of files) {
    const split = await splitter.createDocuments(
      [file.content],
      [{ filePath: file.filePath }]
    );

    chunks.push(...split);
  }

  return chunks;
};