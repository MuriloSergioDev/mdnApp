import firebase from "firebase";
import 'firebase/firestore'
// import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from 'react-native-dotenv'


const firebaseConfig = {
    apiKey: "AIzaSyAgUARLrwGSqFWihPmJkMLIJh5FX2a7p04",
    authDomain: "morada-dos-numeros.firebaseapp.com",
    projectId: "morada-dos-numeros",
    storageBucket: "morada-dos-numeros.appspot.com",
    messagingSenderId: "187602673876",
    appId: "1:187602673876:web:3b79e27fc499bcdffd9b41",
    measurementId: "G-BTNEM4KBWK"
};
// Initialize Firebase
if (!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

// ... before export default statemen
export const db = firebase.firestore()




