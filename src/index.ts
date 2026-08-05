import http from "node:http";
import { bot } from "./app/bot";


http
  .createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200);
      res.end("OK");
      return;
    }

    res.writeHead(404);
    res.end();
  })
  .listen(3000);


bot.start({
  onStart(botInfo) {
    console.log(
      `Bot started as @${botInfo.username}`
    );
  },
});
