global.prefa = ['','!','.',',','🐤','🗿']
global.botname = 'CyberdarkBOT'
global.baileys1 = require('@whiskeysockets/baileys') 
global.sticker1 = "Ellen Official"
global.sticker2 = "🌜"
//===============SETTING MENU==================\\
global.ig = '@mrellen11'
global.yt = 'Mr Ellen'
global.ttowner = '@mrellen11'
global.ownername = 'Mr.Ellen'
global.owner = ['6282274542640'] // SETTING JUGA DI FOLDER DATABASE 
global.ownernomer = '6282274542640'
global.bot = '6282274542640'
global.socialm = 'GitHub: -'
global.versions='567'
global.location = 'Indonesia' 
//========================setting Payment=====================\\
global.nodana = '6282274542640' // KOSONG KAN JIKA TIDAK ADA
global.nogopay = '6282274542640' // KOSONG KAN JIKA TIDAK ADA 
global.noovo = '6282274542640' // KOSONG KAN JIKA TIDAK ADA
//==================setting Payment Name===========================\\
global.andana = '' // KOSONG KAN JIKA TIDAK ADA
global.angopay = '' // KOSONG KAN JIKA TIDAK ADA
global.anovo = '' // KOSONG KAN JIKA TIDAK ADA
//==================setting bot===========================\\
global.botname = 'CyberdarkBOT'
global.ownernumber = '6282274542640'
global.botnumber = '6283898301288'
global.ownername = 'Mr.Ellen'
global.ownerNumber = ["6282274542640@s.whatsapp.net"]
global.ownerweb = ""
global.websitex = ""
global.wagc = "hhttps://chat.whatsapp.com/KhWRxn1USyD0SWdFUN0gL4"
global.themeemoji = '🪀'
global.botscript = 'Dah gede nyari sc 🗿🖕' //script link
global.packname = "Sticker By"
//======================== CPANEL FITUR ===========================\\
global.domain = '-' // Isi Domain Lu jangan kasih tanda / di akhir link
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
//=========================================================//
//Server create panel egg pm2
global.apikey2 = '-' // Isi Apikey Plta Lu
global.capikey2 = '-' // Isi Apikey Pltc Lu
global.domain2 = '-' // Isi Domain Lu
global.docker2 = "ghcr.io/cekilpedia/vip:sanzubycekil" //jangan di ubah

global.eggsnya2 = '15' // id eggs yang dipakai
global.location2 = '1' // id location
//===========================//
global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
global.eggsnya = '15' // id eggs yang dipakai
global.location3 = '1' // id location
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""

//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}


//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
wait: "*_Tunggu sebentar ya Kak♡._*",
   success: "Sukses Kak",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group",
       private: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat",
       owner: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       admin: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "ᴍᴀᴀғ ᴋᴀᴍᴜ ʙᴇʟᴏᴍ ᴍᴇɴᴊᴀᴅɪ ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ᴘʀᴇᴍɪᴜᴍ sɪʟᴀᴋᴀɴ ʙᴇʟɪ ᴅɪ ᴏᴡɴᴇʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ ᴋᴇᴛɪᴋ  .ᴏᴡɴᴇʀ",
   }
}
 
//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "pk-pIWAlRroXTOAigkWdHcYvmlmgzEQXuoMWbVAaLAVZswSRbEB"
