const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("506191326916771860")
setInterval(function() {
channel.send(`ﷲ ﷻ ا̍ڪبڕ ﯣڛۜبحٰۡٱ̍نۨﷲ ﷻ ۄٰا̍ڛۜٿڠڣڔﷲ ﷻ ﯟٰا̍ڸحۡمۭد ڵڶہ
ﷲ ﷻ ا̍ڪبڕ ﯣڛۜبحٰۡٱ̍نۨﷲ ﷻ ۄٰا̍ڛۜٿڠڣڔﷲ ﷻ ﯟٰا̍ڸحۡمۭد ڵڶہ
ﷲ ﷻ ا̍ڪبڕ ﯣڛۜبحٰۡٱ̍نۨﷲ ﷻ ۄٰا̍ڛۜٿڠڣڔﷲ ﷻ ﯟٰا̍ڸحۡمۭد ڵڶہ
ﷲ ﷻ ا̍ڪبڕ ﯣڛۜبحٰۡٱ̍نۨﷲ ﷻ ۄٰا̍ڛۜٿڠڣڔﷲ ﷻ ﯟٰا̍ڸحۡمۭد ڵڶہ`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
