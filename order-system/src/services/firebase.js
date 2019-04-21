import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBcuMSnGu8jG2lKt3TQl49HmLCqqwq_ZjM',
  authDomain: 'reactzzaria-f6477.firebaseapp.com',
  databaseURL: 'https://reactzzaria-f6477.firebaseio.com',
  projectId: 'reactzzaria-f6477',
  storageBucket: 'reactzzaria-f6477.appspot.com',
  messagingSenderId: '31143120973'
}

firebase.initializeApp(config)

export default firebase
