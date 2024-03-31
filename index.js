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
        .setDetails(`Perfect x Happier`)
        .setName(`Perfect x Happier`)
        .setState(`Song by: Ed Sheeran - Olivia Rodrigo`)
        .setParty({
            max: 1,
            current: 1,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/1049291215750844448/1223784130890698863/ezgif-4-14d2d47986.gif?ex=661b1cc9&is=6608a7c9&hm=5ef4abca93b2a7eafc82778aff83c11960379ccff42de7a851d33eb03b297a3c&`)
        .setAssetsLargeText(`🎵 Now Playing: Perfect x Happier`)

    client.user.setStatus("dnd");
  
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
