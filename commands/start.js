module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome! This is the start command.");
};
