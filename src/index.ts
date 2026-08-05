import http from "node:http";
import { telegramWebhook } from "./webhook/telegram.webhook";

const PORT = Number(process.env.PORT) || 3000;

http
  .createServer((req, res) => {
    if (req.method === "POST" && req.url === "/telegram") {
      telegramWebhook(req, res);

      return;
    }

    if (req.method === "GET" && req.url === "/health") {
      res.writeHead(200);
      res.end("OK");

      return;
    }

    res.writeHead(404);
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
