let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*👑@𝚌𝚎𝚘𝚐𝚎𝚛𝚒𝚙𝚒𝚞𝚖* ${pesan}`
let teks = `♥️𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝙂𝙍𝙐𝙋𝙊♥️\n${oi}\n\n*𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙴𝚂*\n`
for (let mem of participants) {
teks += `♡⃘💓꒰ @${mem.id.split('@')[0]}\n`}
teks += `\n👑𝙶𝙴𝚁𝙸𝙿𝙸𝚄𝙼`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
