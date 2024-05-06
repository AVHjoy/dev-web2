import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3E3nqfl5ve1Op9HEWAYQCZmDNtVjsF-s",
  authDomain: "devweb2-c5d19.firebaseapp.com",
  projectId: "devweb2-c5d19",
  storageBucket: "devweb2-c5d19.appspot.com",
  messagingSenderId: "589269475582",
  appId: "1:589269475582:web:01f38e2ac12aef424805af",
  measurementId: "G-BCNRJYRZ31"
};


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;