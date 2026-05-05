import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './fireData';

export async function signIn({ email, password }) {
  try {
    const signInData = await signInWithEmailAndPassword(auth, email, password)

    return {
      emil: email,
      uid: signInData.user.uid
    }
  } catch (error) {
    console.log('error signing in: ', error.message)
    return null
  }
}