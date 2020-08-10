import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDUjB9gAiDiHmbyqw71_ogwVdOP48b2ig8',
  authDomain: 'tinder-clone-331d9.firebaseapp.com',
  databaseURL: 'https://tinder-clone-331d9.firebaseio.com',
  projectId: 'tinder-clone-331d9',
  storageBucket: 'tinder-clone-331d9.appspot.com',
  messagingSenderId: '716463694552',
  appId: '1:716463694552:web:325ebdd329f3ae2278adad',
  measurementId: 'G-TQGKZR0LHN'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database
