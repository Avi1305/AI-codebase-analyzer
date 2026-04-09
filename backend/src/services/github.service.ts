import {simpleGit} from "simple-git";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

export const cloneRepository = async (repoUrl: string) => {
  const repoName = repoUrl.split("/").pop()?.replace(".git", "") || "repo";

  const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  const repoPath = path.join(__dirname, "../../repos", repoName);

  if (fs.existsSync(repoPath)) {
    console.log("Repo already exists, skipping clone");
    return repoPath;
  }

  const git = simpleGit();

  await git.clone(repoUrl, repoPath);

  return repoPath;
};