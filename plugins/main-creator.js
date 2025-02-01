let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;Mselachui;;;
FN:Msela chui
ORG:Mselachui 
TITLE:Owner
item1.TEL;waid=260774358600:260774358600
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Msela Chui
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Msela Chui',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'msela'];

export default handler;
