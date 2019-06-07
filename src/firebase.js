import Reabse from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnef2ZQtiYLS54BGdEot3lsVdYorBgE4E",
    authDomain: "book-store-react.firebaseapp.com",
    databaseURL: "https://book-store-react.firebaseio.com",
    projectId: "book-store-react",
    storageBucket: "book-store-react.appspot.com",
    messagingSenderId: "133671879090",
    appId: "1:133671879090:web:e326629d3d4ae949"
});

const fbase = Reabse.createClass(firebaseApp.database());

export { fbase, firebaseApp };