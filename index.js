const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "?";

Client.on("ready", () => {
    console.log("Lancement...");
    console.log("Chargement des ressources...");
    console.log("50%");
    console.log("100%");
    console.log("Collecte du contenu dynamique...");
    console.log("Bot oppérationnel à 100% !");
}); 



//arrivées et départs


//arrivées
Client.on("guildMemberAdd", member => {
    console.log("Un membre est arrivé !");
    member.guild.channels.cache.find(channel => channel.id === "810966218709270608").send(member.displayName + " 𝐵𝒾𝑒𝓃𝓋𝑒𝓃𝓊𝑒 𝓈𝓊𝓇 𝓁𝑒 𝓈𝑒𝓇𝓋𝑒𝓊𝓇 ! 𝒥𝑒 𝓈𝒶𝒾𝓉 𝓆𝓊'𝑜𝓃 𝓋𝒶 𝒷𝒾𝑒𝓃 𝓈'𝑒𝓃𝓉𝑒𝓃𝒹𝓇𝑒 ;)" + " **Nous sommes maintenant** " + member.guild.memberCount + " **sur le serveur !**");
    member.roles.add("802508542421762048");
});

//départs
Client.on("guildMemberRemove", member => {
    console.log("Un membre nous à quitté...");
    member.guild.channels.cache.find(channel => channel.id === "810966218709270608").send(member.displayName + " 𝐻𝑜 𝓉𝓊 𝑒𝓈𝓉 𝓅𝒶𝓇𝓉𝒾 ? 𝒥𝑒 𝒸𝓇𝑜𝓎𝒶𝒾𝓈 𝓆𝓊'𝑜𝓃 é𝓉𝒶𝒾𝓉 𝒶𝓂𝒾𝓈...")
});




//commandes pour joueurs


//variables
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
            if(mention == undefined){
                message.reply("Aucun membre n'a été séléctionné.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName +  " a été banni avec succès ! ");
                }
                else {
                    message.reply("Impossible de bannir ce membre...");
                }
            }
        }
    }
    //?ytb
    if(message.content == prefix + "ytb"){
        message.channel.send("𝔸𝕓𝕠𝕟𝕟𝕖𝕤 𝕥𝕠𝕚 𝕖𝕥 𝕥'𝕒𝕦𝕣𝕣𝕒𝕤 𝕦𝕟 𝕞𝕖𝕚𝕝𝕝𝕖𝕦𝕣 𝕘𝕣𝕒𝕕𝕖 ;) https://www.youtube.com/channel/UC9_6M_OV9WcLBM9tIbui5qA");
    };
    
    //?twitch
    if(message.content == prefix + "twitch"){
        message.channel.send("𝔽𝕠𝕝𝕝𝕠𝕨 𝕞𝕠𝕚 𝕤𝕦𝕣 𝕋𝕨𝕚𝕥𝕔𝕙 𝕖𝕥 𝕕𝕖𝕧𝕚𝕖𝕟𝕥 𝕦𝕟 𝕓𝕘 :) https://www.twitch.tv/fronsone");
    };

    //?tiktok
    if(message.content == prefix + "tiktok"){
        message.channel.send("𝔽𝕠𝕝𝕝𝕠𝕨 𝕞𝕠𝕚 𝕤𝕦𝕣 𝕋𝕚𝕜 𝕋𝕠𝕜 𝕖𝕥 𝕕𝕖𝕧𝕚𝕖𝕟𝕤 𝕦𝕟𝕖 𝕓𝕒𝕟𝕒𝕟𝕖 𝕓𝕝𝕖𝕦𝕖 ! https://www.tiktok.com/@la_banana_bleu?lang=fr");
    };

    //?me
    if(message.content == prefix + "me"){
        message.channel.send("`" + message.author.username + " Tes informations sont les suivantes => " + "ID :` " + message.author.id);
    };

    //?help
    if(message.content == prefix + "help"){
        message.channel.send(message.author.username + " `Bonjour je suis clemsytoff le dev de ce magnifique bot ! Voici toutes les commandes disponibles grâce à ce bot : \n I. ?me (informations sur vous) \n II. ?ytb (chaîne youtube du fondateur) \n III. ?twitch (chaîne twitch du fondateur) \n IV. ?tiktok / ?tik tok (voir le compte tik tok du fondateur) \n V. ?config (configurer le bot)` "  );
    };

     //?config
     if(message.content == prefix + "config"){
         message.channel.send("**Vous ne pouvez pas configurer ce bot vous même ! Veuillez contacter le service client !** https://discord.gg/rkC6YMgvDf");
     };
});


   


//tocken
Client.login(process.env.TOKEN);