import firebase from 'firebase'

const config = {
  apiKey: "",
  authDomain: "yourDomain.firebaseapp.com",
  databaseURL: "https://yourDomain.firebaseio.com",
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth