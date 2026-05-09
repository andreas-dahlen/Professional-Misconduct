import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './fireData';
import { errorHandling } from './errorHandling.js';


const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export async function signInWithGoogle() {
  try {
    const creds = await signInWithPopup(auth, googleProvider)
    return {
      email: creds.user.email,
      uid: creds.user.uid
    }
  } catch (error) {
    console.error("something went wrong with Google", error)
    return { error: errorHandling(error) }
  }
}

export async function signIn(email, password) {
  try {
    const signInData = await signInWithEmailAndPassword(auth, email, password)
    return {
      email: email,
      uid: signInData.user.uid
    }
  } catch (error) {
    console.error('error signing in: ', error.message)
    return { error: errorHandling(error) }
  }
}

export async function signUserOut() {
  try {
    await signOut(auth)
    return null
  } catch (error) {

    console.error('error signing out', error)
    return { error: errorHandling(error) }
  }
}

export async function signUp(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    console.error('success!', result)
    return {
      email: result.user.email,
      uid: result.user.uid
    }

  } catch (error) {
    console.error('error signing up', error)
    return { error: errorHandling(error) }
  }
}