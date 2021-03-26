require("dotenv").config();

const express = require("express");
const route = express.Router();

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.BOT_API;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, {});

route.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    let messageBody = `
<i>Name:</i> ${name}

<i>Email:</i> ${email}

<i>Subject:</i> ${subject}

<i>Message:</i> ${message}
    `;
    bot.sendMessage(chatId, messageBody,{ parse_mode: "HTML" });
    res.status(200).send({
      message: "Thanks for contacting us",
    });
  } catch (e) {
    console.log(e);
    res.status(404).send({
      message: "Something went wrong",
    });
  }
});

module.exports = route;
