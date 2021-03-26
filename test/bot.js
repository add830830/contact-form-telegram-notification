require("dotenv").config()

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_API;

const bot = new TelegramBot(token, {});
  
const test = ()=>{
    bot.sendMessage(process.env.CHAT_ID,"Good morning")
}

test();