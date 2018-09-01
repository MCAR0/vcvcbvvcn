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



client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
   var everyone = msg.guild.defaultRole;
  var p = "*";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
                       var a =msg.guild.createChannel('SERVER STATS', 'voice').then(yo => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       yo.setParent(kk);
     al.overwritePermissions(everyone, { CONNECT: false });
      alp.overwritePermissions(everyone, { CONNECT: false });
       alph.overwritePermissions(everyone, { CONNECT: false });
        yo.overwritePermissions(everyone, { CONNECT: false });
  setInterval(() => {
     al.setName('Members: ' + msg.guild.members.filter(m => !(m.user.bot)).size, 'voice');
      alp.setName('Bots: ' + msg.guild.members.filter(m => m.user.bot).size, 'voice');
        alph.setName('Text channels: ' + msg.guild.channels.filter(c => c.type == 'text').size, 'voice');
         yo.setName('Voice channels: ' + (msg.guild.channels.filter(c => c.type == 'voice').size - 3), 'voice');
 },1000);
                       })
                   })
    
                })
           })
  })
           
  }
 
});







       client.on('message', message => {
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("** Click To Invite This BOT **")
                    .setURL("رابط اضافة البوت");
                   message.channel.sendEmbed(embed);
                  }
});










const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {

if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }

    if(message.content.startsWith(prefix + "%credit" || prefix + "credits")) {
message.channel.send(**${message.author.username}, your 💳 balance is \`${userData.credits}``.);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "%daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(⏱ | ${message.author.username}, your daily 💴 credits refreshes in ``1 Day``.);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(🏧 | ${message.author.username}, you received your 💴 ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });

    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
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
