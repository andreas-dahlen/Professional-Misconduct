import { NavLink } from 'react-router';
import { useCartStore } from '../../hooks/storeHooks/useCartStore';
import { imgPath } from '../../data/settings';
import LoginHeaderHud from './LoginHeaderHud';
import { useLocation } from "react-router";

export default function Header() {

  const { totalItems } = useCartStore()

  const counterSize = () => {
    if (totalItems > 99) return '50px'
    if (totalItems > 10) return '40px'
    return '35px'
  }

  const location = useLocation();

  return (
    <header className={location.pathname === '/' ? '' : 'header-green'}>

      <NavLink to='/' className="navlink-logo-h">

        <img src={`${imgPath}logo.svg`} className="logo" alt="logo of Professional Misconduct" />
      </NavLink>

      <div className='header-right'>
        <div className='products-and-cart'>
          <NavLink to='/products' className={`def-btn ${location.pathname !== '/products' ? 'cancel-highlight' : ''}`}> PRODUCTS</NavLink>

          <div className='cart-and-counter'>
            <NavLink to='cart' className="def-btn"> CART</NavLink>
            {totalItems !== 0 && <div style={{ width: counterSize(), height: counterSize() }}>{totalItems}</div>}
          </div>

        </div>
        <LoginHeaderHud />
      </div>
    </header>
  )
}