import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlAs4szxvUl7Xbl5kHsV2wRGLbPn_vcVw",
    authDomain: "discord-clone-9b70a.firebaseapp.com",
    projectId: "discord-clone-9b70a",
    storageBucket: "discord-clone-9b70a.appspot.com",
    messagingSenderId: "554194005643",
    appId: "1:554194005643:web:6e76ae4c706e81e1b2ae8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };