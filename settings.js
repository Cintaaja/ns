const chalk = require("chalk")
const fs = require("fs")

require("./lib/vn")
require("./scrape/tiktok")
global.bad = ["anjing","Anjing","Memek","Asu","Asw","Bangsat","Tolol","Goblok","Gblk","Ajg","Mmk","memek","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
global.hituet = 0
global.gopayno = "0895324850967"
global.danano = "0895324850967"
global.shopeepayno = "0895324850967"
global.botName = "SkyBot"
global.wm = "ボ ＫＡＹＬＡ ⁴̅⁰͍⁴̵"
global.creator = "6285798145596@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `📍𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐒𝐤𝐲𝐁𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩`
global.packname = ``
global.author = `×͜× ▭▬▭▬▭▬ 👑 ▭▬▭▬▭▬ ×͜×\nﾒ 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐒𝐤𝐲𝐁𝐨𝐭\nﾒ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 𝐒𝐤𝐲𝐁𝐨𝐭  : 𝟎𝟖𝟗𝟓𝟑𝟐𝟒𝟗𝟓𝟎𝟗𝟔𝟕\nﾒ 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝐒𝐤𝐲𝐁𝐨𝐭: \n⊟————————⊟`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.autoreadsw = true
global.ownerNomor = '62895324850967'
global.ownerName = '𝐒𝐤𝐲𝐁𝐨𝐭'
global.ownerNumber = ["62895324850967@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

global.bapak = [
'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID',
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})