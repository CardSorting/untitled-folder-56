import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

declare module '../services/firebase' {
  export const app: FirebaseApp
  export const auth: Auth
}
