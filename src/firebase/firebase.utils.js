import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCHHJlhSEEhvtSOwKAelYVBue2dfobSGW4",
  authDomain: "crwn-db-64935.firebaseapp.com",
  databaseURL: "https://crwn-db-64935.firebaseio.com",
  projectId: "crwn-db-64935",
  storageBucket: "crwn-db-64935.appspot.com",
  messagingSenderId: "9795345094",
  appId: "1:9795345094:web:f2be4cf63165bf11a855c7",
  measurementId: "G-9SKEF9FYC0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
