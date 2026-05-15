import { NavLink, useLocation } from 'react-router';
import { useCartStore } from '../../hooks/storeHooks/useCartStore';
import LoginHeaderHud from './LoginHeaderHud';
import { useMemo } from 'react';
import logo from '../../assets/logo.svg';
import BackBtn from '../../assets/back-btn.svg?react';

export default function Header() {

  const { totalItems } = useCartStore()

  const counterSize = useMemo(() => {
    if (totalItems > 99) return '45px'
    if (totalItems >= 10) return '40px'
    return '35px'
  }, [totalItems]);

  const location = useLocation();
  const place = location.pathname
  const atHome = location.pathname === '/'

  return (
    <header className={!atHome ? 'header-green' : ''}>

      <NavLink to='/' className="navlink-logo-h logo-anim" tabIndex={atHome ? -1 : 0} data-home={atHome}>

        <img src={logo} className="logo" alt="logo of Professional Misconduct" />
      </NavLink>

      <div className='header-right'>
        <div className='products-and-cart'>
          <NavLink to='/products' end className="btn-header btn-anim" tabIndex={place === '/products' ? -1 : 0}
            data-home={atHome}
          > PRODUCTS</NavLink>

          <div className={`cart-and-counter btn-anim ${place === '/cart' ? 'active' : ''}`} data-home={atHome} >
            <NavLink to='cart' className="btn-header" tabIndex={place === '/cart' ? -1 : 0}> CART</NavLink>
            {totalItems !== 0 && <div style={{ width: counterSize, height: counterSize, color: 'var(--text' }}>{totalItems}</div>}
          </div>

        </div>
        <LoginHeaderHud />
      </div>

      <NavLink to={-1} style={atHome ? { display: "none" } : null} className="navlink-back-btn logo-anim">
        <BackBtn />
      </NavLink>

    </header >
  )
}