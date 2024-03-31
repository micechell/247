require('dotenv').config();
const keep_alive = require('./keep_alive.js');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('534203414247112723')
        .setType('LISTENING')
        .setURL(`https://www.twitch.tv/#`)
        .setDetails(`drunk text`)
        .setName(`drunk text`)
        .setState(`Song by: Henry Moodie`)
        .setParty({
            max: 1,
            current: 1,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/1049291215750844448/1223880656271179859/ssstik.io_1711865460864-ezgif.com-crop.gif?ex=661b76af&is=660901af&hm=07d87210c7588f97a62069740be3e513ed6e52c0bb4ae2559cce1331c5e0aec2&`)
        .setAssetsLargeText(`🎵 Now Playing: drunk text`)

    client.user.setStatus("dnd");
  
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
