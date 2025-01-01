declare module '../../composables/useAuth' {
  export const user: Ref<any>
  export const signInWithGoogle: () => Promise<void>
  export const signOutUser: () => Promise<void>
}
