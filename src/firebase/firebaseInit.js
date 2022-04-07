import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuSrRiPoLe0E6XU7eH4Hk2hSqVU_flgT4",
    authDomain: "fireblogsyt-43614.firebaseapp.com",
    projectId: "fireblogsyt-43614",
    storageBucket: "fireblogsyt-43614.appspot.com",
    messagingSenderId: "227313766486",
    appId: "1:227313766486:web:0aae06c2a55a4476c56bf7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();