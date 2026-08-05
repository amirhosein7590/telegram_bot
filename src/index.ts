import { bot } from "./app/bot";

async function bootstrap() {
  bot.start({
    onStart(botInfo) {
      console.log(`Bot started as @${botInfo.username}`);
    },
  });
}

bootstrap();
