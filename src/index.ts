import http from "node:http";
import { telegramWebhook } from "./webhook/telegram.webhook";
import { bot } from "./app/bot";


const PORT = Number(process.env.PORT) || 3000;


async function bootstrap() {

  await bot.init();

  console.log(
    `Bot initialized as @${bot.botInfo.username}`
  );


  http
    .createServer((req, res) => {


      console.log(
        "REQUEST:",
        req.method,
        req.url
      );


      if (
        req.method === "POST" &&
        req.url === "/telegram"
      ) {
        telegramWebhook(req, res);
        return;
      }


      if (
        req.method === "GET" &&
        req.url === "/health"
      ) {

        res.writeHead(200);
        res.end("OK");

        return;
      }


      res.writeHead(404);
      res.end();

    })
    .listen(PORT, () => {

      console.log(
        `Server running on port ${PORT}`
      );

    });

}


bootstrap().catch((error) => {

  console.error(
    "Application failed:",
    error
  );

  process.exit(1);

});