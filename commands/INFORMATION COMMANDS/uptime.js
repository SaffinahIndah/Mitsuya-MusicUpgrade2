const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "tidakda",
    aliases: ["uptime"],
    category: "INFORMATION COMMANDS",
    description: "Returns latency and API ping",
    useage: "uptime",
    run: async (client, message, args) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = new Discord.MessageEmbed()
            .setTitle(`**Uptime**`)
            .setColor(config.colors.yes)
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setDescription(`:clock1: \`${days}days\` \`${hours}hours\` \`${minutes}minutes\` \`${seconds}seconds\``);
        return message.channel.send(uptime);
    }
}
