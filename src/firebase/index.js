import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDS0k4a1x_lH_KK6MYk9THacX8Alq67QpA",
    authDomain: "reactjs-asm-uploadanh.firebaseapp.com",
    projectId: "reactjs-asm-uploadanh",
    storageBucket: "reactjs-asm-uploadanh.appspot.com",
    messagingSenderId: "770680578189",
    appId: "1:770680578189:web:5c43f4a84a1b16332182c4",
    measurementId: "G-089BDRFGN7"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage , firebase as default};
  