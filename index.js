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
        .setDetails(`Happier`)
        .setName(`Happier`)
        .setState(`Song by: Ed Sheeran`)
        .setParty({
            max: 1,
            current: 1,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/1049291215750844448/1223856030140862464/c2ad2bbfd90ba615e8a49ef463c8939a-ezgif.com-crop.gif?ex=661b5fbf&is=6608eabf&hm=4549e2ab952ac79c6b5329b2288e8a1a6b2a70adfb7b8bbbee071eb69d6e4165&`)
        .setAssetsLargeText(`🎵 Now Playing: Happier`)

    client.user.setStatus("dnd");
  
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
