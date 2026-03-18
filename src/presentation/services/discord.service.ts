import { APP_CONFIG } from "../../config/app-config"

export class DiscordService { 
    constructor(private discordUrl: string = APP_CONFIG.DISCORD_URL ?? ""){}

    async notify(message: string){
        const body = {
            content: message,
        }

        const res = await fetch(this.discordUrl,{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })

        return res.json()
    }
}