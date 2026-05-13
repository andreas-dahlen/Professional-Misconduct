import { NavLink, useLocation } from 'react-router';
import { useCartStore } from '../../hooks/storeHooks/useCartStore';
import { imgPath } from '../../data/settings';
import LoginHeaderHud from './LoginHeaderHud';
import { useMemo } from 'react';

export default function Header() {

  const { totalItems } = useCartStore()

  const counterSize = useMemo(() => {
    if (totalItems > 99) return '50px'
    if (totalItems > 10) return '40px'
    return '35px'
  }, [totalItems]);

  const location = useLocation();
  const place = location.pathname
  const atHome = location.pathname === '/'

  return (
    <header className={!atHome ? 'header-green' : ''}>

      <NavLink to='/' className="navlink-logo-h logo-anim" tabIndex={atHome ? -1 : 0} data-home={atHome}>

        <img src={`${imgPath}logo.svg`} className="logo" alt="logo of Professional Misconduct" />
      </NavLink>

      <div className='header-right'>
        <div className='products-and-cart'>
          <NavLink to='/products' end className="def-btn btn-anim" tabIndex={place === '/products' ? -1 : 0}
            data-home={atHome}
          > PRODUCTS</NavLink>

          <div className='cart-and-counter'>
            <NavLink to='cart' className="def-btn btn-anim"
              tabIndex={place === '/cart' ? -1 : 0}
              data-home={atHome}
            > CART</NavLink>
            {totalItems !== 0 && <div style={{ width: counterSize, height: counterSize }}>{totalItems}</div>}
          </div>

        </div>
        <LoginHeaderHud />
      </div>
    </header>
  )
}