const TelegramBot = require('node-telegram-bot-api')
const fs = require('fs')

const token = fs.readFileSync('token.txt', 'utf8')

const bot = new TelegramBot(token.trim(), {polling: true})

function getResponse(text) {
    if (text == undefined || !text.length)
        return ""
    text = text.toLowerCase()
    const sussu_pattern = /\bsussu/g
    const rodando_pattern =  /\broda|\bgira|\brota/g
    const maratonusp_pattern = /maratonime/g
    const familiar_pattern_1 = /\bporra|\bpoha|\bcaralho|\bcaraio|\bcu|\brola|\bbuceta/g
    const familiar_pattern_2 = /\bcacete|\bpiroca|\bputa|\bfoda|\bcaguei|\bmerda|\bbosta/g
    const familiar_pattern_3 = /\bcaceta|\bpau|\banus|\bânus\btomanocu\bfude\bcarai\bfuck/g
    if ((match = maratonusp_pattern.exec(text)) != null) {
        return "MaratonUSP*"
    } else if ((match = sussu_pattern.exec(text)) != null) {
        return  "AI SUSSU!"
    } else if ((match = rodando_pattern.exec(text)) != null) {
        return  "RODANDO"
    } else if(text[text.length-1] == '?') {
        if (Math.random() > .1)
            return "";
        return "7"
    } else if (text[text.length-1] == '!' || text[text.length-1] == '.') {
        if (Math.random() > .1)
            return "";
        return "O cara é bom!"
    } else if ((match = familiar_pattern_1.exec(text)) != null ||
     (match = familiar_pattern_2.exec(text)) != null || 
     (match = familiar_pattern_3.exec(text)) != null) {
        if (Math.random() > .3)
            return "";
        return  "Ambiente familiar"
    }
    return ""
}

bot.on('message', (msg) => {
    var response = getResponse(msg.text)
	if (msg.text != undefined && response.length) bot.sendMessage(msg.chat.id, response)
})
