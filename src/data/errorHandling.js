export function errorHandling(error) {
  switch (error.code) {
    case 'auth/invalid-credential':
      return 'wrong email or password'
    case 'auth/email-already-in-use':
      return 'an account with this email already exists'
    case 'auth/network-request-failed':
    case 'unavailable':
    case 'deadline-exceeded':
      return 'connection failed, try again later'

    case 'auth/too-many-requests':
      return 'too many attempts, try again later'
    case 'auth/popup-closed-by-user':
      return 'sign in cancelled'
    case 'permission-denied':
      return 'you do not have permission to do that'
    case 'not-found':
      return 'could not find the requested data'
    default:
      return 'something went wrong'
  }
}