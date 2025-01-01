import { ref, type Ref } from 'vue'
import { type User } from 'firebase/auth'
import { auth } from '../services/firebase'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

interface AuthComposable {
  user: Ref<User | null>
  signInWithGoogle: () => Promise<void>
  signOutUser: () => Promise<void>
}

export function useAuth(): AuthComposable {
  const user = ref<User | null>(null)

  auth.onAuthStateChanged((u: User | null) => {
    user.value = u
  })

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return {
    user,
    signInWithGoogle,
    signOutUser
  }
}
