import type { GithubIssuePayload } from "../../interfaces/webhooks/github/github-issue.interface";
import type { GithubStarPayload } from "../../interfaces/webhooks/github/github-star.interfaces";

export class GithubService {
  constructor() {}

  onStar(payload: GithubStarPayload): string {
    const { starred_at, sender, action, repository } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name}`;
  }

  onIssue(payload: GithubIssuePayload): string {
    const {issue, action, repository, sender} = payload;
    
    return `User ${sender.login} ${action} issue on ${repository.full_name}: ${issue.title}`;
  }
}
