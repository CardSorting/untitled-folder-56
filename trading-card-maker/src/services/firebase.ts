import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'

interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyC_mue1VmMQ2egOuIx1NVdCPQglELxYl14",
  authDomain: "playerstcg-bbc59.firebaseapp.com",
  projectId: "playerstcg-bbc59",
  storageBucket: "playerstcg-bbc59.firebasestorage.app",
  messagingSenderId: "110147371214",
  appId: "1:110147371214:web:2f72f832a45fdffda8509f"
}

const app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)
const db: Firestore = getFirestore(app)

export { auth, db }
