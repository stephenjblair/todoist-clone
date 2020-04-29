import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectID: "",
    storageBucket: "",
    messageSenderID: "",
    apiID: "",
});

export { firebaseConfig as firebase };