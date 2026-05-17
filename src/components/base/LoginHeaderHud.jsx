import { NavLink } from 'react-router'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useLocation } from 'react-router';
import { useAsyncAction } from '../../hooks/utils/useAsyncAction';
import { useLogoutHandler } from '../../hooks/authHandlers/useLogoutHandler';

export default function LoginHeaderHud({ burgerStyle }) {
  const { user } = useUserStore()

  const { logoutHandler } = useLogoutHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const logoutOrchestrator = async () => {
    asyncAction(() => logoutHandler(), 'logout success!')
  }

  const location = useLocation()
  const atLogin = location.pathname === '/login'
  const atHome = location.pathname === '/'

  return (
    <>
      {user ? <button
        className={`${burgerStyle ? 'btn-def' : 'btn-header'} btn-anim`}

        onClick={logoutOrchestrator} data-home={atHome} disabled={isDisabled}>logout</button>
        : <NavLink to='/login' tabIndex={atLogin ? -1 : 0} className='text-link text-anim' data-home={atHome}>login</NavLink>
      }
    </>
  )
}