import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyB39xSxaHiR2YAlwi6Suc1Uek_6L6W-bpw",
    authDomain: "test-firebase-web-push-bb5ad.firebaseapp.com",
    projectId: "test-firebase-web-push-bb5ad",
    storageBucket: "test-firebase-web-push-bb5ad.appspot.com",
    messagingSenderId: "823079035007",
    appId: "1:823079035007:web:b466e764e9e45b2f3b5f4a",
    measurementId: "G-PQN7X9RTEQ"
};

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseConfig);
