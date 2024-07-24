import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAy062XlCrPw8nMC5Cc0BVHp2rTNwoLdEk",
    authDomain: "the-dojo-6f2ce.firebaseapp.com",
    projectId: "the-dojo-6f2ce",
    storageBucket: "the-dojo-6f2ce.appspot.com",
    messagingSenderId: "168573589750",
    appId: "1:168573589750:web:e4488630fec2c02fd6b4d7"
  };

  firebase.initializeApp(firebaseConfig);

  const dbService = firebase.firestore()
  const authService =  firebase.auth()


  const timeStamp = firebase.firestore.Timestamp
  export { dbService, authService, timeStamp }