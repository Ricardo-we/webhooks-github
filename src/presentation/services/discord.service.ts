import { APP_CONFIG } from "../../config/app-config";

export class DiscordService {
  constructor(private discordUrl: string = APP_CONFIG.DISCORD_URL ?? "") {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
            image: {url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGlwbXE5amY2YThtaXUwZ2pzODI4emNydnFxd2l0ZTRyZjkzd3dicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9YhFTjYhRYDXGpVBhJ/giphy.gif"}
        }
      ]
    };

    await fetch(this.discordUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
