import logo from '../../assets/logo.svg'
import { NavLink, useLocation } from 'react-router'
import { useUserStore } from '../../hooks/useUserStore'
import { useLogoutHandler } from '../../hooks/useLogoutHandler'
import { toast } from 'sonner'

export default function Footer() {


  const location = useLocation()
  const { user, isAdmin } = useUserStore()

  const atHome = location.pathname === '/'

  const { logoutHandler } = useLogoutHandler()
  const logoutOrchestrator = async () => {
    const result = await logoutHandler()
    if (result?.error) {
      toast.error(result.error, { id: 'logout-error' })
    }
  }

  const renderLoginOptions = () => {
    if (isAdmin && user) return <NavLink to='/admin'>admin</NavLink>
    if (user) return <button onClick={logoutOrchestrator}>logout</button>
    return <NavLink to='/login'>login</NavLink>
  }

  return (
    <>
      <footer>
        <NavLink to='/' className="navlink-logo-f">
          <img src={logo} className="logo" style={atHome ? { cursor: 'default' } : null} alt="logo of Professional Misconduct"></img>
        </NavLink>

        <div className='footer-flexbox'>
          <p>Sjöviksgatan <br />
            14B 417 56<br />
            Gothenburg<br />
            Sweden</p>

          <p>Contact us: <br />
            0123 456 789 <br />
            mischief@gmail.com</p>
        </div>

        <div className='login-options'>
          {renderLoginOptions()}
        </div>

        <p>isAdmin:{isAdmin ? 'yes' : 'no'}</p>
        <p>email: {user ? user.email : ''}</p>
      </footer>
    </>
  )
}