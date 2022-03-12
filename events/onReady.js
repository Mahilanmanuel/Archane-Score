const chalk = require("chalk");
module.exports = {
	name: "ready",
	once: true,

	execute(client) {
		client.user.setActivity(`/help | Mahilan | ${client.guilds.cache.size}`, { type: "LISTENING" });

		console.log(
			chalk.yellowBright.bold(`
Archane Score IS ONLINE MADE BY Mahilan                                                     
  `)
		);
		console.log(
			chalk.green.bold(`[Archane Score] | Logged in as ${client.user.tag}!`)
		);
		console.log(
			chalk.yellow.bold(`[Archane Score] | Servers! ["${client.guilds.cache.size}"]`)
		);
		console.log(
			chalk.red.bold(`[HJ OP] | Archane Score Users! ["${client.users.cache.size}"]`)
		);
		console.log(
			chalk.cyan.bold(`[HJ OP]! ["${client.channels.cache.size}"]`)
		);
		console.log(chalk.greenBright(`[HJ OP] |Archane Score ready (/) commands`));
	},
};
