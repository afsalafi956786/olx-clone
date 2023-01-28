import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyC3PJftRe-o8cS-relfTWXKKDB06YlSnWE",
    authDomain: "fir-8ca2c.firebaseapp.com",
    projectId: "fir-8ca2c",
    storageBucket: "fir-8ca2c.appspot.com",
    messagingSenderId: "391966374906",
    appId: "1:391966374906:web:b4481b9436fb56f90dc243",
    measurementId: "G-4QW38KD5H7"
  };

 export default firebase.initializeApp(firebaseConfig)