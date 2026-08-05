import { Bot } from "grammy";
import { config } from "./config";
import { handleBusinessMessage } from "../handlers/businessMessage.handler";
import { handleJobSelection } from "../handlers/callbackQuery.handler";


export const bot = new Bot(config.botToken);

bot.on("business_message", handleBusinessMessage);

bot.on("callback_query:data", handleJobSelection);

bot.catch((error) => {
  console.error("Bot Error:", error);
});
