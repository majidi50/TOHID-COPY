const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.OWNER_NAME || "𝙈𝙎𝙀𝙇𝘼-𝘾𝙃𝙐𝙄",
    ownerNumber: process.env.OWNER_NUMBER || "260774358600",
    mode: process.env.MODE || "public",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "CHUI-MASTER-BOT",
    exifPack: process.env.EXIF_PACK || "CHUI-MASTER-BOT",
    exifAuthor: process.env.EXIF_AUTHOR || "𝙈𝙎𝙀𝙇𝘼-𝘾𝙃𝙐𝙄",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "true",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
