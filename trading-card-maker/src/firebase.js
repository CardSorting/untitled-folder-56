import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_mue1VmMQ2egOuIx1NVdCPQglELxYl14",
  authDomain: "playerstcg-bbc59.firebaseapp.com",
  projectId: "playerstcg-bbc59",
  storageBucket: "playerstcg-bbc59.firebasestorage.app",
  messagingSenderId: "110147371214",
  appId: "1:110147371214:web:2f72f832a45fdffda8509f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };