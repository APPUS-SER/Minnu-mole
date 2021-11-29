/* codded by APPUS-SER
use this git under copyright
dont change credit
*/

const Appu = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const fs = require("fs")
const zara = require('../zara');

if (config.WORKTYPE == 'private') {
Appu.addCommand({pattern: 'owner', fromMe: true, desc: 'it send owner details'}, (async (message, match) => {

    var Appu = await axios.get(config.APPU, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(Appu.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `*` + config.BOTPLK + `*` + `\n\n CREATED BY ` + Minnu.M_OWNER + `\n\n` + `*•━━━━━━━━╼  ╾━━━━━━━•*`
}) 

}));
}

else if (config.WORKTYPE == 'public') {

Rashi.addCommand({pattern: 'owner', fromMe: false, desc: 'it send owner details'}, (async (message, match) => {

    var Appu = await axios.get(config.APPU, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(rashi.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: fs.readFileSync('./image/r.jpg'), contextInfo: {mentionedJid: message.mention}, caption: `*` + config.BOTPLK + `*` + `\n\n    CREATED BY ` + Minnu.M_OWNER + `\n\n` + `*•━━━━━━━━╼  ╾━━━━━━━•*`
}) 

}));
}
