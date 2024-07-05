module.exports = (bot, msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'This is the help command. How can I assist you?');
};
