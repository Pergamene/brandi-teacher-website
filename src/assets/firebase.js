import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9MuTd77JL6aCTf8jPS7PmFw2QNzeMBFE",
  authDomain: "brandi-teacher-website.firebaseapp.com",
  databaseURL: "https://brandi-teacher-website.firebaseio.com",
  projectId: "brandi-teacher-website",
  storageBucket: "brandi-teacher-website.appspot.com",
  messagingSenderId: "500485834131",
  appId: "1:500485834131:web:b996796fd34741a7ec1466",
  measurementId: "G-WTR7NZ7MH3"
};

// Setup app
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Setup authentication
export const auth = firebase.auth();

// Setup storage
export const storageRef = firebase.storage().ref();

// Setup database
export const db = firebase.firestore();

// Watch for Auth changes
export const watchAuth = setSignedIn => {
  auth.onAuthStateChanged(user => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });
}

export default firebase;
