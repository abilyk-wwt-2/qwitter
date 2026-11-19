import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  // YOUR CONFIG HERE
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

/**
 * Firebase Firestore database instance
 * Provides access to the Firestore database for real-time data operations
 * @type {firebase.firestore.Firestore}
 */
export default db
