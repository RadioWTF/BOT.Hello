/**
 * BOT.Hello
 *
 * By Radio.WTF
 * https://radio.wtf
 * -------------------------------------------------------------------------- */

'use strict';

var fs        = require('fs');
var config    = require('./config.json');
var Discord   = require('discord.js');
var bot       = new Discord.Client({ autoReconnect: true });
var token     = config.botToken;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
});

bot.on('guildMemberAdd', member => {
  var msg = 'Привет, ' + member + '! Я бот интернет-радиостанции **Радио W.T.F.** У нас ты можешь найти друзей по интересам, узнать много нового и необычного, рассказать о своем увлечении или навыке в прямом эфире.\n' +
            '\n1. Зайди в **Настройки пользователя > Голос > Режим ввода** и включи **Push to Talk**.' +
            '\n2. Справа назначь кнопку, по нажатии на которую ты будешь говорить.';

  member.guild.defaultChannel.send(msg);
  var channel = member.guild.channels.find('name', 'log-bot');
  if (!channel) return;

  channel.send(msg);
});

bot.login(token);
