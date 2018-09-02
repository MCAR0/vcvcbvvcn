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
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var p = "z";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});























const hastebin = require('hastebin-gen');
client.on('message', message => {
var PREFIX = 'z';
    if(message.content.startsWith(PREFIX + 'dis')) {
            var args = message.content.split(' ').slice(1).join(' ');
}
      var array = [];
      var i = 0;
      if(args){
client.users.filter(u => u.discriminator == args).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;

   array.push(`${u.tag}`);
});
}
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);
});
client.on('message' , message => {
var PREFIX = 'البرفكس';
if(message.content === `${PREFIX}dis`) {
                      let array = [];
                      var i = 0;
client.users.filter(u => u.discriminator == message.author.discriminator).map(u => {
    if(i > 4){
     return;
    }
    i = i + 1;
   array.push(`${u.tag}`);
});
hastebin(`${array.slice(0, 30).join('\n')}`, 'txt').then(l => {
    message.channel.send(`${l}`);
}).catch(console.error);

        }
});






















client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = 'z';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who  report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
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
