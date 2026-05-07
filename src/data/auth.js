import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './fireData';
import { errorHandling } from './errorHandling.js';


const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  try {
    const creds = await signInWithPopup(auth, googleProvider)

    console.log('success! result = ', creds)
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
    console.log(signInData)
    return {
      email: email,
      uid: signInData.user.uid
    }
  } catch (error) {
    console.log('error signing in: ', error.message)
    return { error: errorHandling(error) }
  }
}

export async function signUserOut() {
  try {
    await signOut(auth)

    console.log('success signing out')
    return null
  } catch (error) {

    console.log('error signing out', error)
    return { error: errorHandling(error) }
  }
}

export async function signUp(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    console.log('success!', result)
    return {
      email: result.user.email,
      uid: result.user.uid
    }

  } catch (error) {
    console.log('error signing up', error)
    return { error: errorHandling(error) }
  }
}