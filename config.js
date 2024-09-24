//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['201025663589']
global.ownMain = '201025663589'
global.NamaOwner = '✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯'
global.sessionName = 'session'
global.connect = true // Change To False If You Want To Use Qr Code
global.namabot = 'ˣᵉᵒⁿ ᵇᵘᵍ ᵇᵒᵗ'
global.wm = "Xeon Bot Inc."
global.themeemoji = '🪀'
global.author = '✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯' 
global.packname = 'Sticker By\n\n' 
global.domain = ''
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' 
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV'
global.eggsnya = '15'
global.location = '1'
global.url1 = 'https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x'
global.url2 = 'https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x'
global.linkgc = 'https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x'
global.delayjpm = 3500

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

global.mess = {
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'This command can be used by owner only',
premium: 'This command can be used by premium user only',
seller: 'This feature can only be used by resellers and owners only',
usingsetpp: `This command can be used by owner only`,
wait: 'In process...',
success: 'Done✓',
bugrespon: `In process...`
}

global.nick = {
aaa: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯",
bbb: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯",
ccc: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯",
eee: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯",
xxx: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯",
sss: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯",
ttt: "✯𝘔𝘌𝘎𝘖×𝘚𝘗𝘐𝘋𝘌𝘙✯"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})