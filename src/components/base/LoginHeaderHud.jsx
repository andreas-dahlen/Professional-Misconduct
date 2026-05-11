import { NavLink } from 'react-router'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useLogoutHandler } from '../../hooks/crudHandlers/useLogoutHandler'
import { toast } from 'sonner'

export default function LoginHeaderHud() {
  const { user } = useUserStore()

  const { logoutHandler } = useLogoutHandler()
  const logoutOrchestrator = async () => {
    const result = await logoutHandler()
    if (result?.error) {
      toast.error(result.error, { id: 'logout-error' })
    }
  }

  const renderLoginOptions = () => {
    if (user) return <button className='small-btn' onClick={logoutOrchestrator}>logout</button>
    return <NavLink to='/login' className='small-btn'>login</NavLink>
  }

  return (
    <div className='auth-hud'>
      <p>{user ? user.email : ''}</p>
      <span>★</span>
      {renderLoginOptions()}
    </div>
  )
}