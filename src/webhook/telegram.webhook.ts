import { IncomingMessage, ServerResponse } from "node:http";
import { bot } from "../app/bot";

export async function telegramWebhook(
  req: IncomingMessage,
  res: ServerResponse,
) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const update = JSON.parse(body);
      console.log(JSON.stringify(update, null, 2)); // for debug

      await bot.handleUpdate(update);

      res.writeHead(200);
      res.end("OK");
    } catch (error) {
      console.error("Webhook Error:", error);

      res.writeHead(500);
      res.end("Internal Server Error");
    }
  });
}
