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
        .setType('WATCHING')
        .setURL(`https://www.twitch.tv/#`)
        .setDetails(`Manchester United FC`)
        .setName(`Manchester United FC`)
        .setState(`Location: Old Trafford`)
        .setParty({
            max: 1,
            current: 1,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/1048122559905927178/1278652447270764574/InShot_20240829_161739420.gif?ex=66d19563&is=66d043e3&hm=9b0778a4e177cfb6aebd9ca4cfad58be2a1bc4db194848842bd4bdbc84a0a32c&`)
        .setAssetsLargeText(`😈 The Red Devils`)

    client.user.setStatus("dnd");
  
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
