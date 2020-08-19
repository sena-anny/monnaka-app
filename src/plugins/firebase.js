import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Firebase設定
let firebaseConfig = {};
if (process.env.CI_MODE === "github") {
  firebaseConfig = {
    apiKey: process.env.APP_APIKEY,
    authDomain: process.env.APP_AUTHDOMAIN,
    databaseURL: process.env.APP_DATABASEURL,
    projectId: process.env.APP_PROJECTID,
    storageBucket: process.env.APP_STORAGEBUCKET,
    messagingSenderId: process.env.APP_MESSAGINGSENDERID,
    appId: process.env.APP_APPID,
    measurementId: process.env.APP_MEASUREMENTID
  };
} else {
  firebaseConfig = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_APPID,
    measurementId: process.env.VUE_APP_MEASUREMENTID
  };
}
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;
export const auth = firebase.auth;
export const storage = firebase.storage;
