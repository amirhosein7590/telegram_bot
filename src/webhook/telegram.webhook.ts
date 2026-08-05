import { IncomingMessage, ServerResponse } from "node:http";
import { bot } from "../app/bot";

export async function telegramWebhook(
  req: IncomingMessage,
  res: ServerResponse
) {

  console.log("WEBHOOK REQUEST RECEIVED");

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {

    console.log("BODY:", body);

    try {
      const update = JSON.parse(body);

      await bot.handleUpdate(update);

      res.writeHead(200);
      res.end("OK");

    } catch (error) {
      console.error("WEBHOOK ERROR:", error);

      res.writeHead(500);
      res.end("ERROR");
    }

  });
}
