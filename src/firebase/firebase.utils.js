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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const cteatedAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                cteatedAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
