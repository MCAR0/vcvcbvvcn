const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'z'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});










       client.on('message', message => {
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("** Click To Invite This BOT **")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=450941189244583937&scope=bot&permissions=1");
                   message.channel.sendEmbed(embed);
                  }
});




















client.on('message',async msg => {
  if(msg.content.startsWith(prefix + "setDate")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **أنت لا تملك الصلاحيه **');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
    var args = msg.content.split(' ').slice(1).join(' ');


  msg.channel.send(':white_check_mark: » تم عمل روم التاريخ   بنجاح');
  msg.guild.createChannel(`DATE : []`, 'voice').then(time => {

    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(` ${args} : [${Year} - ${Month} - ${Dat}]`);
 },1000);
  });
  }
 
});







    const devs = ['315967794543984640' , '' , '' , ''];
    const control = "z";
    client.on('message', message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!devs.includes(message.author.id)) return;

      if (message.content.startsWith(control + 'play')) {
        client.user.setGame(argresult);
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'watch')) {
      client.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'listen')) {
      client.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.sendMessage(`**✅   ${argresult}**`)
      } else
      if (message.content.startsWith(control + 'stream')) {
        client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
          message.channel.sendMessage(`**✅   ${argresult}**`)
      }
      });








client.login(process.env.BOT_TOKEN);
