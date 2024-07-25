import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDcVbkpHyV9u92OSvRShgHBec0fRb7qElI",
  authDomain: "the-dojo-v2.firebaseapp.com",
  projectId: "the-dojo-v2",
  storageBucket: "the-dojo-v2.appspot.com",
  messagingSenderId: "37509101657",
  appId: "1:37509101657:web:ba62ef85a8b2b229fb1948",
};

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()
  const projectAuth =  firebase.auth()
  const projectStorage = firebase.storage()

  const timeStamp = firebase.firestore.Timestamp
  export { projectFirestore, projectAuth, projectStorage, timeStamp };