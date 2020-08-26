import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBrBcHlv5dt_YIOFdvIVnLNOpjbWt0hEcw",
    authDomain: "ig-reels-80266.firebaseapp.com",
    databaseURL: "https://ig-reels-80266.firebaseio.com",
    projectId: "ig-reels-80266",
    storageBucket: "ig-reels-80266.appspot.com",
    messagingSenderId: "137967737433",
    appId: "1:137967737433:web:2877114cc49c41dccbaf48",
    measurementId: "G-GQCK43L258"
  };

  const firebaseApp = firebase.initializeApp 
  (firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;