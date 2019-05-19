  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCDBGUH__B8-DTj3-ZGoiI0ZVZO8tt1UGM",
    authDomain: "portfolio-b3417.firebaseapp.com",
    databaseURL: "https://portfolio-b3417.firebaseio.com",
    projectId: "portfolio-b3417",
    storageBucket: "portfolio-b3417.appspot.com",
    messagingSenderId: "98225973220",
    appId: "1:98225973220:web:7ec7b8c0d08633ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true }); //to not get the warnings in the console

  export default db;

