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
        .setDetails(`Every moment of you`)
        .setName(`Every moment of you`)
        .setState(`Song by: Sung Si Kyung`)
        .setParty({
            max: 1,
            current: 1,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/1048198608144584730/1241322647195881502/lv_7348491172878372098_20240518161840_online-video-cutter.com_1_1.gif?ex=6649c74d&is=664875cd&hm=9193e3339a9b325690cee2ff60f295741dffd38d38a4364fa513fd6ed81d0436&`)
        .setAssetsLargeText(`🎵 Now Playing: Every moment of you`)

    client.user.setStatus("dnd");
  
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
