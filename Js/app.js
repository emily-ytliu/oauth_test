import { createTransport } from 'nodemailer';

async function main() {
//   const transporter = nodemailer.createTransport({
//     //因為是用
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       type: 'OAuth2',
//       user: '你用來申請的gmail',
//       clientId:
//         '申請的OAuth client_Id',
//       clientSecret: '申請的OAuth client_Id',
//       refreshToken:
//         '你換到的refresh token',
//       accessToken:
//         '你換到的 access token'
//     }
//   })

  let transporter = createTransport({
    host: "oauth2.googleapis.com",
    port: 465,
    secure: true,
    auth: {
      type: "Bearer",
      user: "yiting50425@gmail.com",
      clientId: "1002356771396-1oq45k50058k9jojm30u0cpkcgqlcpod.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04bCmjrPLa58WCgYIARAAGAQSNwF-L9Irys6BmYbU1qFc8Xrxhwsi1cZ_B6gbVqZGvuCdjStmNOlTVjke-k6UIr0qjmkfjdepkIs",
      accessToken: "ya29.a0AWY7Ckku9X4iz7kYBta3y57z-sq_7gGO2qwZW5WiIBgSjN_biKFrSxLj6XNpE95SqXGnsvJWR6zzV11sIN0fQMVYcYcUk3assnzY-Kj9bfUclGO28TehX1OHtX8YtBqkvQpwheL7RP_YXc328VfpTuXRB88maCgYKAQ8SARASFQG1tDrpiD9_dbJxCTmTUlYfswQ4QA0163",
      expires: 3599,
    },
  });


  let info = await transporter.sendMail({
    // 你的帳號
    from: 'yiting50425@gmail.com',
    //要傳送的對象
    to: 'ttasecret18@gmail.com',
    //副本的對象
    // cc: 'ff@gmail.com',
    //秘密副本的對象
    // bcc: 'ff@gmail.com',
    //信件主旨
    subject: '這是我的主旨',
    //使用plain text作為內文
    text: '一般的plain text',
    //使用HTML作為內文
    // html: "<h1>這裡可以塞html 圖片可以用含在裡面html內<img src='cid:Embedded'></h1>",
    // 夾帶檔案
    attachments: [
      {
        //自訂檔名
        // filename: 'pic.jpg',
        //檔案所在路徑
        // path: './image0.jpg'
        //利用cid來定位要Embedded的圖片
        // cid: 'Embedded'
      }
    ]
  })
  console.log(info)
  
  //以下是回傳的內容
  // {
  //   accepted: ['fufong79570@gmail.com'],
  //   rejected: [],
  //   envelopeTime: 434,
  //   messageTime: 1100,
  //   messageSize: 118515,
  //   response: '250 2.0.0 OK  1629731198 c19sm6269629pjs.1 - gsmtp',
  //   envelope: { from: '你的帳號', to: ['你傳給的對象'] },
  //   messageId: '<自動產生的ID>'
  // }
}

main().catch((err) => console.log(err))