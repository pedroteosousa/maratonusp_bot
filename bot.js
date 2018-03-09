const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')

const token = fs.readFileSync('token.txt', 'utf8')

const bot = new TelegramBot(token.trim(), {polling: true})

function getResponse(text) {
	text = text.toLowerCase()
    const sussu_pattern = /\bsussu/g
	const rodando_pattern =  /\broda|\bgira|\brotacionar|\brotação/g
    if ((match = sussu_pattern.exec(text)) != null) {
    	return  "AI SUSSU!"
    } else if ((match = rodando_pattern.exec(text)) != null) {
    	return  "RODANDO!"
    } else if(text[text.length-1] == '?') {
        if (Math.random() > .1)
            return "";
        return "7"
    } else if (text[text.length-1] == '!' || text[text.length-1] == '.') {
        if (Math.random() > .1)
            return "";
        return "O cara é bom!"
    }
    return ""
}

bot.on('message', (msg) => {
    var response = getResponse(msg.text)
	if (msg.text != undefined && response.length) bot.sendMessage(msg.chat.id, response)
})
