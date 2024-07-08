const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255625335309";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_54_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHZWpKRTVYaEZ3aUNSRzVramNUaHZDZjRWb2FiSXBILzI3czFkUFlXUFF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPY0FzT3dpZVRJZW1oZkdCWFJQMHF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmZmY2YjhmLTA2YWEtNDU1Yy1iYTJjLTUxNzA1OWVhZTAyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE2NixcbiAgICAgIDI0MixcbiAgICAgIDg5LFxuICAgICAgODUsXG4gICAgICA5OSxcbiAgICAgIDEwNyxcbiAgICAgIDIzOSxcbiAgICAgIDMsXG4gICAgICAzNyxcbiAgICAgIDEzNyxcbiAgICAgIDkzLFxuICAgICAgMTQ1LFxuICAgICAgNjgsXG4gICAgICA3MCxcbiAgICAgIDY4LFxuICAgICAgMTk0LFxuICAgICAgMjIxLFxuICAgICAgMjA2LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyMCxcbiAgICAgIDM5LFxuICAgICAgNTUsXG4gICAgICAyNDgsXG4gICAgICAyMCxcbiAgICAgIDYwLFxuICAgICAgMjQxLFxuICAgICAgMTU5LFxuICAgICAgMjUsXG4gICAgICAxNzYsXG4gICAgICAxNjksXG4gICAgICA2NixcbiAgICAgIDI0MCxcbiAgICAgIDI0MSxcbiAgICAgIDEzNCxcbiAgICAgIDE3NCxcbiAgICAgIDI1NCxcbiAgICAgIDE3OSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNTRTM0hCRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI1MzM1MzA5OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQnJheW9vXCIsXG4gICAgXCJsaWRcIjogXCIxNjQzODU5NjQxOTE5NjM6NjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGk0Ky9jQ0VOdlBzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsUUNjSVhyN3QrYU4xbm1WMkt3dVZRSmF2NVNkRWRGcEJxeUQ4bnFqc21ZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJScGhVZitQZU5RMWtQSW56bm9PbEZzcDRpWG1sRTR6d2hrMkNhNWRPbERsT3hGSXd0VzRJVWI4MWlLSUkxcnduejFpaHBTbjI2eUxtYURiWHlOYUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkk4WlIxTXFkZytpOUVxaW90enZiT0JaOGRHY0xuNlc0b2poLzZtbCtCa3psb0R6K2lQaGUwOW9tTXplU0NYc1R3YXplMjNDRXV3RmFvS25ldDF0UGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNTMzNTMwOTo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjEyNzhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "brayoo",
  ownername:process.env.OWNER_NAME|| "brayoo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
