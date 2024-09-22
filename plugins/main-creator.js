let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Giovanni-OFC;;\nFN:Giovanni-OFC\nORG:Giovanni-OFC\nTITLE:\nitem1.TEL;waid=51902855352:51902855352\nitem1.X-ABLabel:おDanịel.xyz⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おDanịel.xyz⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Giovanni-OFC', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler