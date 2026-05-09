import { useNavigate } from 'react-router'
import { useUserStore } from '../storeHooks/useUserStore'
import { signUp } from '../../data/auth'
import { createNewUser } from '../../data/crud'


export function useCreateHandler() {

  const { setIsAdmin, setUser } = useUserStore()
  const goTo = useNavigate()

  const createHandler = async (email, password) => {
    const authInfo = await signUp(email, password)
    if (authInfo?.error) return { error: authInfo.error }

    await createNewUser({ uid: authInfo.uid, email: authInfo.email })
    setUser({ uid: authInfo.uid, email: authInfo.email, isAdmin: false })
    setIsAdmin(false)
    goTo('/')
  }
  return { createHandler }
}