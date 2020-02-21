import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAZ3BwucnywQlAMLeEYmKFk-OLRUqcHIjs',
  authDomain: 'hong-app-264605.firebaseapp.com',
  databaseURL: 'https://hong-app-264605.firebaseio.com',
  projectId: 'hong-app-264605',
  storageBucket: 'hong-app-264605.appspot.com',
  messagingSenderId: '1072581375699',
  appId: '1:1072581375699:web:e9593f15748bd32b710626',
  measurementId: 'G-CZZBTXTM5X',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
