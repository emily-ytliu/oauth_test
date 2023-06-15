const gmailBtnDOM = document.querySelector("#gmailBtn");

gmailBtnDOM.addEventListener("click", () => {
  authenticateAndSendEmail();
})

// 1. 初始化 Gmail API
function initGmailApi() {
  gapi.client.init({
    // YOUR_API_KEY 
    apiKey: 'AIzaSyDMfgHWoa8fPDrXbtKm9zgVk1RdXRyulYw',  
    // YOUR_CLIENT_ID
    clientId: '1002356771396-1oq45k50058k9jojm30u0cpkcgqlcpod.apps.googleusercontent.com', 
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
    scope: 'https://www.googleapis.com/auth/gmail.send',
  }).then(function () {
    // 在此處進行身份驗證並發送郵件
    authenticateAndSendEmail();
  }).catch(function (error) {
    console.error('初始化 Gmail API 時發生錯誤:', error);
  });
}

// 2. 進行身份驗證並發送郵件
function authenticateAndSendEmail() {
  gapi.auth2.getAuthInstance().signIn().then(function () {
    // 建立郵件內容
    const recipientEmail = 'ttasecret18@gmail.com';
    const subject = '帳號驗證';
    const verificationLink = 'https://example.com/verify';

    const emailBody = `
      <h2>帳號驗證</h2>
      <p>請點擊以下連結進行驗證：</p>
      <a href="${verificationLink}"</a>
    `;

    const email = createEmail(recipientEmail, subject, emailBody);

    // 呼叫 Gmail API 以發送郵件
    const request = gapi.client.gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: btoa(email).replace(/\+/g, '-').replace(/\//g, '_'),
        // 將所有的 + 字元替換為 -
        // 將所有的 / 字元替換為 _
        // Gmail API，郵件內容需透過 Base64 編碼
      },
    });
    request.execute(function (response) {
      console.log('郵件已發送:', response);
    });
  }).catch(function (error) {
    console.error('身份驗證時發生錯誤:', error);
  });
}

// 3. 建立郵件內容
function createEmail(to, subject, body) {
  const email = [
    'Content-Type: text/html; charset="UTF-8"\r\n',
    'To: ' + to + '\r\n',
    'Subject: ' + subject + '\r\n',
    '\r\n',
    body,
  ].join('');
  return email;
}

// 4. 初始化 Gmail API
gapi.load('client:auth2', initGmailApi);



createEmail("ttasecret18@gmail.com", "帳號驗證測試", `<h2>帳號驗證</h2>
<p>請點擊以下連結進行驗證：</p>
<a href=""</a>`)
