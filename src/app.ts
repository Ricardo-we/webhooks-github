import { APP_CONFIG } from "./config/app-config";
import express from "express";
import { GithubController } from "./presentation/controllers/controller";
import { GithubSha256Middleware } from "./utils/verify-github-signature";


function main() {
  const app = express();
  
  
  app.use(express.json());
  app.use(GithubSha256Middleware.verifyGithubSignature)
  
  app.listen(APP_CONFIG.PORT, () => {
    console.log(`Server is running on port ${APP_CONFIG.PORT}`);
  });
  
  
  const githubController = new GithubController()
  app.post("/webhooks/github", githubController.githubWebhookHandler);
}

main();
