var {getEvents,getWeekend } = require('./funcs'),
{ Client} = require('discord.js'),
client = new Client();
module.exports = (token) => {
if(!token) throw Error('Please enter a token')
client.login(token)
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));
client.on('message', async msg => {
    var data = await getEvents()
    if (msg.content == 'events') {
    msg.reply({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()},
        title: "This weekend we got",
        url: "https://mlh.io/events",
        description: "This week we have a lot" ,
        timestamp: new Date(),
    }})
data.forEach(ev => {
if(getWeekend().includes(ev.date)) {
msg.reply({embed: {
color: 3447003,
title:ev.title,
image: {
url: ev.img,
},
        url:ev.url,
        description: ev.date
      }})
    }
    })
}});
}