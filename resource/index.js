/**
 * BOT.Hello
 *
 * By Radio.WTF
 * https://radio.wtf
 * ------------------------------------------------------------------------------------------------------------------ */

'use strict';

var fs = require('fs');
var config = require('./config.json');
var Discord = require('discord.js');
var bot = new Discord.Client({autoReconnect: true});
var token = config.botToken;

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.username}!`);
});

bot.on('guildMemberAdd', member => {
	const embed = new Discord.RichEmbed()
		.setTitle('Сообщество FURRY')
		.setAuthor('FURS.Network', 'https://furs.chat/storage/images/discord/logo.bot.hello.png')
		.setColor(0xFF0000)
		.setDescription('Привет, ' + member + '!\nЯ бот сообщества [FURS.Network](https://furs.network/) и интернет-радиостанции [Радио W.T.F.](https://radio.wtf/)\nУ нас ты можешь найти друзей по интересам, узнать много нового и необычного, рассказать о своем увлечении или навыке в прямом эфире.')
		.setFooter('© FURS.Network','https://furs.chat/storage/images/discord/logo.bot.hello.png')
		.setImage('')
		.setThumbnail('')
		.setTimestamp()
		.setURL('https://furs.network')
		.addField('# Настройки','1. Зайди в **Настройки пользователя > Голос > Режим ввода** и включи **Push to Talk**.\n2. Справа назначь кнопку, по нажатии на которую ты будешь говорить.')
		.addField('# Ресурсы', '- [FURS.Network](https://furs.network/)\n- [Радио W.T.F.](https://radio.wtf/)')
		.addField('# Социальные сети', '[ВКонтакте](https://vk.com/radiowtf) | [Facebook](https://www.facebook.com/wtf.space) | [Twitter](https://twitter.com/wtf_space) | [YouTube](https://www.youtube.com/channel/UC_20PUsjh897fA8QkSXqjeg) | [GitHub](https://github.com/RadioWTF)');

	member.guild.defaultChannel.send({embed});

	var channel = member.guild.channels.find('name', 'log-bot');
	if (!channel) return;

	channel.send({embed});
});

bot.login(token);
