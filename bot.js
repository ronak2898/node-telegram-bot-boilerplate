const TelegramBot = require("node-telegram-bot-api");
const commands = require("./commands");
const {
  parsed: { TELEGRAM_ACCESS_TOKEN },
} = require("dotenv").config();
const bot = new TelegramBot(TELEGRAM_ACCESS_TOKEN, { polling: true });

function handleCommand(command, bot, msg) {
  if (commands[command]) {
    commands[command](bot, msg);
  } else {
    bot.sendMessage(
      msg.chat.id,
      "Unknown command. Type /help for a list of available commands."
    );
  }
}

// bot.on('callback_query', (callbackQuery) => {
// });

bot.onText(/\/[a-z]*/, (msg, match) => {
  const resp = match[0].split("/")[1];
  handleCommand(resp, bot, msg);
});

console.log("Bot is running...");
