import { useNavigate } from 'react-router'
import { signInWithGoogle } from '../../data/auth'
import { useUserStore } from '../storeHooks/useUserStore'
import { createNewUser, getUserInfo } from '../../data/crud'

export function useGoogleHandler() {

  const { setIsAdmin, deleteUser, setUser } = useUserStore()
  const goTo = useNavigate()

  const googleHandler = async () => {
    const authInfo = await signInWithGoogle()
    if (authInfo?.error) {
      deleteUser()
      setIsAdmin(false)
      return { error: authInfo.error }
    }

    const userInfo = await getUserInfo(authInfo)
    if (!userInfo || userInfo.error) {
      await createNewUser({ uid: authInfo.uid, email: authInfo.email, isAdmin: false })
      setUser({ uid: authInfo.uid, email: authInfo.email, isAdmin: false })
      setIsAdmin(false)
      goTo('/')
      return
    }

    setUser(userInfo)
    setIsAdmin(userInfo.isAdmin)
    goTo('/')
  }
  return { googleHandler }
}
