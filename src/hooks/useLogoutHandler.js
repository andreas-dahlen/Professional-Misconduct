import { useNavigate } from 'react-router'
import { signUserOut } from '../data/auth'
import { useUserStore } from './useUserStore'

export function useLogoutHandler() {

  const { setIsAdmin, deleteUser } = useUserStore()
  const goTo = useNavigate()

  const logoutHandler = async () => {
    const info = await signUserOut()
    if (info?.error) {
      return { error: info.error }
    }
    deleteUser()
    setIsAdmin(false)
    goTo('/')
  }
  return { logoutHandler }
}
