const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')

const token = fs.readFileSync('token.txt', 'utf8')

const bot = new TelegramBot(token, {polling: true})

function getResponse(text) {
    const pattern = /\bSussu\b/g
    if (text[text.length-1] == '?') {
        if (Math.rand() > .1)
            return "";
        return "7"
    } else if ((match = pattern.exec(text)) != null) {
    	return  "AI SUSSU!"
    } else if (text[text.length-1] == '!' || text[text.length-1] == '.') {
        if (Math.rand() > .1)
            return "";
        return "O cara é bom!"
    }
    return ""
}

bot.on('message', (msg) => {
  if (msg.text != undefined && getResponse(msg.text).length) bot.sendMessage(msg.chat.id, getResponse(msg.text))
})
