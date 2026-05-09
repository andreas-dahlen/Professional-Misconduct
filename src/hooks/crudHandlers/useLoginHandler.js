import { useNavigate } from 'react-router'
import { signIn } from '../../data/auth'
import { useUserStore } from '../storeHooks/useUserStore'
import { getUserInfo } from '../../data/crud'

export function useLoginHandler() {

  const { setIsAdmin, deleteUser, setUser } = useUserStore()
  const goTo = useNavigate()

  const loginHandler = async (email, password) => {
    const authInfo = await signIn(email, password)
    if (authInfo?.error) {
      deleteUser()
      setIsAdmin(false)
      return { error: authInfo.error }
    }

    const userInfo = await getUserInfo(authInfo)
    if (userInfo?.error) {
      deleteUser()
      setIsAdmin(false)
      return { error: userInfo.error }
    }

    setUser(userInfo)
    setIsAdmin(userInfo.isAdmin)
    if (userInfo.isAdmin) goTo('/')
  }
  return { loginHandler }
}
