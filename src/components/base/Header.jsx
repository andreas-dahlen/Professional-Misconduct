import { NavLink } from 'react-router';
import { useCartStore } from '../../hooks/storeHooks/useCartStore';
import { imgPath } from '../../data/settings';
import { useLogoutHandler } from '../../hooks/crudHandlers/useLogoutHandler';
import { toast } from 'sonner';

export default function Header() {

  const { totalItems } = useCartStore()
  const { logoutHandler } = useLogoutHandler()
  const logoutOrchestrator = async () => {
    const result = await logoutHandler()
    if (result?.error) {
      toast.error(result.error, { id: 'logout-error' })
    }
  }
  return (
    <header>

      <NavLink to='/' className="navlink-logo-h">

        <img src={`${imgPath}logo.svg`} className="logo" alt="logo of Professional Misconduct"></img>
      </NavLink>

      <div className='products-and-cart-and-authhud'>
        <div className='products-and-cart'>
          <NavLink to='/products' className="def-btn"> PRODUCTS</NavLink>

          <div className='cart-and-counter'>
            <NavLink to='cart' className="def-btn"> CART </NavLink>
            <div>{totalItems}</div>
          </div>
        </div>
        <div className='login-hud'>
          {/* TODO conditional rendering */}
          <button onClick={logoutOrchestrator}>logout</button>
        </div>
      </div>
    </header>
  )
}