const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`logged in as  ${client.user.tag}!`);
});

click.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(process.env.TOKEN);
