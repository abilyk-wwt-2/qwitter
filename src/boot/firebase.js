import firebase from "firebase/app"
import "firebase/firestore"

/**
 * Firebase configuration object
 * @type {Object}
 */
const firebaseConfig = {
  // YOUR CONFIG HERE
}

firebase.initializeApp(firebaseConfig)

/**
 * Firestore database instance for real-time data operations
 * @type {firebase.firestore.Firestore}
 */
let db = firebase.firestore()

export default db
