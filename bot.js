const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.startsWith("Leon")) {
    	message.channel.send("Get your mane on!!");
  	} else

  
  if (message.content.includes("kitten")) {
    message.channel.send("Hey! I'm a LION! Respect the miraculous!");
  } else

  if (message.content.includes("Inari")) {
    message.channel.send("I-inaRI? Wh-Where?!");
  } else

  if (message.content.includes("Echo")) {
    message.channel.send("*run*");
  } else
      
  if (message.content.includes("step on me antonie")) {
     message.channel.send("Er... I could, if you really want me to?");
  } else
      
  if (message.content.includes("Kitty")) {
      message.channel.send("Hey!!! Stay back you snake, she's mine.");
  } else
       
  if (message.content.includes("Am I pretty Antonie")) {
      message.channel.send("Of course you are! You're beautiful!");
  } else
      
  if (message.content.includes("Monique")) {
      message.channel.send("Is she around? I had a fashion question to ask her.");
  } else
      
  if (message.content.includes("lovemeAntonie")) {
      message.channel.send("You're one of my best friends, of course I love you!");
  } else
      
  if (message.content.includes("satan")) {
      message.channel.send("*flings holy water*");
  } else
      
  if (message.content.includes("Good fluffy lion boi")) {
      message.channel.send("<:uwu:430503471821619200>");
  }

 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
