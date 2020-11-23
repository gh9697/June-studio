import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC3_vaHwaJZQUksc3igjIwZf6y9oubKZCI",
  authDomain: "june-studio.firebaseapp.com",
  databaseURL: "https://june-studio.firebaseio.com",
  projectId: "june-studio",
  storageBucket: "june-studio.appspot.com",
  messagingSenderId: "434037116253",
  appId: "1:434037116253:web:14307638a1ec85417cacb4",
  measurementId: "G-X6NPKDEXPT",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
