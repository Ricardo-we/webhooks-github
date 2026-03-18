import type { Request, Response } from "express";
import { GithubService } from "../services/github.service";
import type { GithubStarPayload } from "../../interfaces/webhooks/github/github-star.interfaces";
import type { GithubIssuePayload } from "../../interfaces/webhooks/github/github-issue.interface";
import { DiscordService } from "../services/discord.service";

export class GithubController {
  constructor(
    private readonly githubService: GithubService = new GithubService(),
    private readonly discordService: DiscordService = new DiscordService()
  ) {}

  githubWebhookHandler = (req: Request, res: Response) => {
    const githubEvent = req.header("x-github-event") ?? "unkown";
    const payload: GithubStarPayload | GithubIssuePayload = req.body;
    let message: string = "";

    switch (githubEvent) {
      case "star":
        message = this.githubService.onStar(payload as GithubStarPayload);
        break;
      case "issues":
        message = this.githubService.onIssue(payload as GithubIssuePayload);
        break;
      default:
        message = "unkown event"
    }

    this.discordService.notify(message);

    return res.json("Webhook received");
  };
}
