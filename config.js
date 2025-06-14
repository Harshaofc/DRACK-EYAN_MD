const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IABUzRiB#wX8uISpuR6oygEjEjhmtdlCQMbwv86pcS4Sg8e5Aeg0", 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", 
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DRACK EYAN-MD 🤍*",
WELCOME: process.env.WELCOME || "faise",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "faise",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/FLbwTSQr/jpg.jpg",
PREFIX: process.env.PREFIX || ".", // add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "DRACK EYAN-MD",
STICKER_NAME: process.env.STICKER_NAME || "DRACK EYAN-MD",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "false",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94727786760",
OWNER_NAME: process.env.OWNER_NAME || "Harsha",
DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʀᴀᴄᴋ ᴇʏᴀɴ-ᴍᴅ*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/FLbwTSQr/jpg.jpg",
LIVE_MSG: process.env.LIVE_MSG || "> *DRACK EYAN-MD*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "private",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "94727786760",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
};
