// 假設你已經有一個 API 金鑰，將其替換為 YOUR_API_KEY
const API_KEY = 'AIzaSyDMfgHWoa8fPDrXbtKm9zgVk1RdXRyulYw';

// 在請求中包含 API 金鑰
const requestUrl = 'https://api.example.com/endpoint?key=' + API_KEY;

// 或者使用 Fetch API
fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    // 處理 API 回應
    console.log(data);
  })
  .catch(error => {
    // 處理錯誤
    console.error('發生錯誤:', error);
  });
