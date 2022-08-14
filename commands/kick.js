module.exports = {
	name: 'kick',
	description: 'Kick!',
	execute(message) {
		if(!message.mentions.users.size) {
			return message.channel.send(`Tag toh krle beta, ${message.author}`);
		}
		else {
			const kicktaggedUsers = message.mentions.users.map(user => {
				return `Boooooo!!! You wanted to kick: ${user.username}`;
			});
			message.channel.send(kicktaggedUsers);
		}
	},
};