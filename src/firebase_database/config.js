const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCeWFWaNeQI1RG61kV8aiC6xip5-eppIOs",
  authDomain: "csi-contactus.firebaseapp.com",
  projectId: "csi-contactus",
  storageBucket: "csi-contactus.appspot.com",
  messagingSenderId: "1059928571668",
  appId: "1:1059928571668:web:3b309eff02de3dff34cc01",
  measurementId: "G-89VFGSWV0E"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
