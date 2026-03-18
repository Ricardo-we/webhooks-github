import { APP_CONFIG } from "./config/app-config";
import express from "express";
import { GithubController } from "./presentation/controllers/controller";

function main() {
  const app = express();
  const githubController = new GithubController();

  app.use(express.json());
  app.listen(APP_CONFIG.PORT, () => {
    console.log(`Server is running on port ${APP_CONFIG.PORT}`);
  });

  app.post("/webhooks/github", githubController.githubWebhookHandler);
}

main();
