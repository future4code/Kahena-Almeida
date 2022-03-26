import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC1Eg27aKNkP3JUfAlr4sPSxAZMucc5ZFQ',
  authDomain: 'promobit-03.firebaseapp.com',
  projectId: 'promobit-03',
  storageBucket: 'promobit-03.appspot.com',
  messagingSenderId: '169948763080',
  appId: '1:169948763080:web:66935c8add06aa3287a6fd'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
