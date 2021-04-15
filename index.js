const { Client } = require("discord.js");
const { config } = require("dotenv");
const cron = require("cron");

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/token.env"
});

client.on("ready", () => {
    console.log('Bot Ready!');
});

var CronJob = require('cron').CronJob;
var job = new CronJob('0 0 7 * * 3', function() {
    client.channels.cache.get("channel id").send("https://images-ext-1.discordapp.net/external/SU5QlG-DT4OwkNXIFlHiREUsWTgqtF362k08jwOoHgE/%3Fsize%3D512/https/cdn.discordapp.com/avatars/674614838495805461/7590926a2d675a10ccacb461d46ac860.jpg");;
}, null, true, 'Brazil/East');
job.start();

client.login(process.env.TOKEN);
