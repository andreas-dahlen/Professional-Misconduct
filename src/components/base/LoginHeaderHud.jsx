import { NavLink } from 'react-router'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useLogoutHandler } from '../../hooks/crudHandlers/useLogoutHandler'
import { toast } from 'sonner'

export default function LoginHeaderHud() {
  const { user } = useUserStore()

  const { logoutHandler } = useLogoutHandler()
  const logoutOrchestrator = async () => {
    toast.loading('loading...', { id: 'sonner' })
    const result = await logoutHandler()
    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
    } else {
      toast.success('success!', { id: 'sonner', duration: 3000 })
    }
  }

  const renderLoginOptions = () => {
    if (user) return <button className='def-btn' onClick={logoutOrchestrator}>logout</button>
    return <NavLink to='/login' className='text-link'>login</NavLink>
  }

  return (
    <div className='auth-hud'>
      <p>{user ? user.email : ''}</p>
      <span>{user ? '★' : ''}</span>
      {renderLoginOptions()}
    </div>
  )
}