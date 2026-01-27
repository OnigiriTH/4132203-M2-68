importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js",
);

// ใส่ Config ชุดเดียวกับในหน้า index.html
const firebaseConfig = {
  apiKey: "AIzaSyAKjPsp_i6q1Ml0jT-vRCw6iB7F6Jr5618",
  authDomain: "pun045.firebaseapp.com",
  projectId: "pun045",
  storageBucket: "pun045.firebasestorage.app",
  messagingSenderId: "582706924726",
  appId: "1:582706924726:web:85b1181040bfcf4c656a17",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[sw.js] Background message received: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968924.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
