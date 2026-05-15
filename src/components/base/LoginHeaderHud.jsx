import { NavLink } from 'react-router'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useLogoutHandler } from '../../hooks/crudHandlers/useLogoutHandler'
import { useLocation } from 'react-router';
import { useAsyncAction } from '../../hooks/useAsyncAction';

export default function LoginHeaderHud() {
  const { isAdmin, user } = useUserStore()

  const { logoutHandler } = useLogoutHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const logoutOrchestrator = async () => {
    asyncAction(() => logoutHandler(), 'logout success!')
  }

  const location = useLocation()
  const atLogin = location.pathname === '/login'
  const atHome = location.pathname === '/'

  const renderLoginOptions = () => {
    if (user) return <button className='btn-header btn-anim' onClick={logoutOrchestrator} data-home={atHome} disabled={isDisabled}>logout</button>
    return <NavLink to='/login' tabIndex={atLogin ? -1 : 0} className='text-link text-anim' data-home={atHome}>login</NavLink>
  }

  return (
    <div className='auth-hud' data-admin={isAdmin}>
      <p>{user ? user.email : ''}</p>
      <span>{user ? '★' : ''}</span>
      {renderLoginOptions()}
    </div>
  )
}