const TelegramBot = require("node-telegram-bot-api");

const token = "7608024573:AAHMupDrsYE2TSY0CE1-N0AgAH3goZ_uCSs";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg, match) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, "Hi how are you my friend ")
});