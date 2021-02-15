import firebase from "firebase";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC2q2iSdkfpVSgmbfvyRgi2E_swW8Qwlxc",
    authDomain: "mdnappusers-b9ad2.firebaseapp.com",
    databaseURL: "https://mdnappusers-b9ad2-default-rtdb.firebaseio.com",
    projectId: "mdnappusers-b9ad2",
    storageBucket: "mdnappusers-b9ad2.appspot.com",
    messagingSenderId: "800039642290",
    appId: "1:800039642290:web:1350861e0593cfe6ab55ab",
    measurementId: "G-796NBSR530",
    timestampsInSnapshots: true
};
// Initialize Firebase
if (!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

// ... before export default statemen
export const db = firebase.firestore()




