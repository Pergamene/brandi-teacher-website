import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

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

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();

export default firebase;
