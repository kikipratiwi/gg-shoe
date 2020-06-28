import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXxnf9xWHmIb7mqwmDoGhlLisa72BHsPg",
    authDomain: "gg-shoes.firebaseapp.com",
    databaseURL: "https://gg-shoes.firebaseio.com",
    projectId: "gg-shoes",
    storageBucket: "gg-shoes.appspot.com",
    messagingSenderId: "106771329214",
    appId: "1:106771329214:web:ceac8462b3ed7de4876eef",
    measurementId: "G-DMBKJZB0SX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
