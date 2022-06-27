//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94772724220']
global.premium = ['94772724220']
global.ownernomer = '94772724220'
global.ownername = 'Rᷢaⷶsᷤtͭhͪaⷶ mͫuͧrͬuͧ'
global.botname = 'Rᷢaⷶsᷤtͭhͪaⷶ mͫuͧrͬuͧ'
global.footer = ' Qᴜᴇᴇɴ ʙɪxʙʏ ᴘᴜʙʟɪᴄ ᴇᴅɪᴛɪᴏɴ.'
global.ig = 'https://github.com/darkalphaxteam'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/darkalphaxteam/Queen-Bixby-MD'
global.myweb = 'https://youtube.com/channel/UCvpyOCBCaBSCdv4QolnO0WQ'
global.packname = 'Queen Bixby MD'
global.author = 'Thinura '
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🚢'
global.mess = {
    success: 'හරි ✓',
    admin: 'මෙම පහසුකම ඇඩ්මින්ට පමණි!',
    botAdmin: 'ප්‍රථමයෙන් Bot හට ඇඩ්මින් ලැබිය යුතුයි!',
    owner: 'මෙම පහසුකම වෝනර් හට පමණි!',
    group: 'මෙම පහසුකම සමූහය තුළ පමණි!',
    private: 'මෙම පහසුකම පව්ද්ගලික කතාබස් තුල පමණි!',
    bot: 'මෙම පහසුකමBot හට පමණි!',
    wait: 'මදක් රැඳී සිටින්න...',
    error: 'අව්ලකි! Api Key එක කල් ඉකුත් වී ඇත🤔!',
    endLimit: 'ඔබගේ දිනයට අදාල වාර ගනණ අවසන්, රීසෙට් කර ඊලඟ පැය දෙකේ උත්සාහ කරන්න!',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./BixbyMedia/djt.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
