const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with Jai Shree Ram!'),
	async execute(interaction) {
		await interaction.reply('Jai Shree Ram!');
	},
};