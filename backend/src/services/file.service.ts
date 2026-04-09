import fs from "fs";
import path from "path";

const allowedExtensions = [".js", ".ts", ".jsx", ".tsx", ".py", ".md"];

export const readFilesFromRepo = async (dir: string) => {
  let results: any[] = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const ignoredFolders = ["node_modules", ".git", "dist", "build"];

    const fullPath = path.join(dir, file);


    if (ignoredFolders.some(folder => fullPath.includes(folder))) {
      continue;
    }


    if (fullPath.endsWith(".min.js")) {
      continue;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(await readFilesFromRepo(fullPath));
    } else {
      const ext = path.extname(file);

      if (allowedExtensions.includes(ext)) {
        const content = fs.readFileSync(fullPath, "utf-8");

        results.push({
          filePath: fullPath,
          content: content.slice(0, 1000), // limit size for now
        });
      }
    }
  }

  return results;
};