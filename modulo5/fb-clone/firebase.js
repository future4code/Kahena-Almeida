import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC1J_SZ8tqYUaUcf-hlZv6FzxzaZO6lN-E',
  authDomain: 'facebook-clone-f23fe.firebaseapp.com',
  projectId: 'facebook-clone-f23fe',
  storageBucket: 'facebook-clone-f23fe.appspot.com',
  messagingSenderId: '299484226532',
  appId: '1:299484226532:web:3de8ce4d9115f1fb905df1'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
