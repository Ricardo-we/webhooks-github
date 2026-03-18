import "dotenv/config";
import envVar from "env-var";

export const APP_CONFIG = {
  PORT: envVar.get("PORT").default(3000).required().asPortNumber(),
  WEBHOOK_SECRET: envVar.get("WEBHOOK_SECRET").asString(),
  DISCORD_URL: envVar.get("DISCORD_URL").asString(),
};
