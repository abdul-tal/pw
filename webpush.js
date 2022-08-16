const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BNgIM2bPgDqArtLaOlhmYZtDYmD3TTMzudNwc6tD6Yz9H6PoOcu2Xm8-MHlHcgzMB8D2yNUYcx_c-Hpcq0QKTI8',
  privateKey: 'PAuMmgLsj5ZXC2A4aJR7xW8xW2GJ12Yrs79RDWEvTM4'
};

webpush.setVapidDetails(
  'mailto:abdul.rahman@ytalentica.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  "endpoint":"https://fcm.googleapis.com/fcm/send/fbltouQPubQ:APA91bH2ch_XFBcp0CGIl1t-0zouOlZy4i-nb8raMHYzbcR1snMu2HtvhpZsl48C8X8iEVBY15oWSPKBzwAy8IpYMP1IPbPx2FA5F_fYjlD2oVtpkwO0ha0cUOgdRPJuY_lD6VxEgBe-",
  "expirationTime":null,
  "keys":{
    "p256dh":"BED4qU6f7YAwLUS5hUDtOwAdmKRSsu0L_GA8ko6wWGwnLMdaO3B-DdyxFm_GyHMAQQmV-4HzUdCKW49fBl3oW5w",
    "auth":"U8l211GWjT6ICxBCflD7nQ"
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');