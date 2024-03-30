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
        .setAssetsLargeImage(`mp:attachments/1049291215750844448/1223616362887512124/y2mate.is_-_Perfect_x_happier_-_Ed_Sheeran_x_Olivia_orange_lyric_edit_edits_overlay_shorts_lyrics-QsOPpkFYuTQ-720p-1711801854-ezgif.com-crop.gif?ex=661a808a&is=66080b8a&hm=66bbd64168bc079b34110a7a0836970e7d9726d7cbcbf5694ccc0fb000215c0d&`)
        .setAssetsLargeText(`🎵 Now Playing: Perfect x Happier`)

    client.user.setStatus("dnd");
  
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
