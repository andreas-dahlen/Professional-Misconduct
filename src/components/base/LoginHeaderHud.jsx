import { NavLink } from 'react-router'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useLogoutHandler } from '../../hooks/crudHandlers/useLogoutHandler'
import { toast } from 'sonner'
import { useLocation } from 'react-router'

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

  const location = useLocation()
  const atLogin = location.pathname === '/login'
  const atHome = location.pathname === '/'

  const renderLoginOptions = () => {
    if (user) return <button className='def-btn btn-anim' onClick={logoutOrchestrator} data-home={atHome}>logout</button>
    return <NavLink to='/login' tabIndex={atLogin ? -1 : 0} className='text-link text-anim' data-home={atHome}>login</NavLink>
  }

  return (
    <div className='auth-hud'>
      <p>{user ? user.email : ''}</p>
      <span>{user ? '★' : ''}</span>
      {renderLoginOptions()}
    </div>
  )
}