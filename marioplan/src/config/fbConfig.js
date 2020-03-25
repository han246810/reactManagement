import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyAukrdwDbsj64KgotLWgXtxvNdGSkeUv3k",
  authDomain: "mangement-tools-app.firebaseapp.com",
  databaseURL: "https://mangement-tools-app.firebaseio.com",
  projectId: "mangement-tools-app",
  storageBucket: "mangement-tools-app.appspot.com",
  messagingSenderId: "153804628901",
  appId: "1:153804628901:web:04d40f3e0b9d4b44a27e4c",
  measurementId: "G-45Z1B5DJTQ"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 