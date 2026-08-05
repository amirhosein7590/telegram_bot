import http from "node:http";
import { bot } from "./app/bot";

const PORT = Number(process.env.PORT) || 3000;

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
  .listen(PORT, () => {
    console.log(`HTTP server listening on ${PORT}`);
  });

console.log("PID:", process.pid);
console.log("Started at:", new Date().toISOString());

async function bootstrap() {
  try {
    await bot.start({
      onStart(botInfo) {
        console.log(`Bot started as @${botInfo.username}`);
      },
    });
  } catch (error) {
    console.error("Failed to start bot:", error);
  }
}

bootstrap();
