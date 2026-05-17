import { NavLink, useLocation } from 'react-router';
import { useCartStore } from '../../hooks/storeHooks/useCartStore';
import LoginHeaderHud from './LoginHeaderHud';
import { useMemo, useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import BackBtn from '../../assets/back-btn.svg?react';
import { useUserStore } from '../../hooks/storeHooks/useUserStore';
import Hamburger from './Hamburger';
import BurgerButton from './BurgerButton';

export default function Header() {

  const [isBurgered, setIsBurgered] = useState(false)

  const { totalItems } = useCartStore()

  const { isAdmin, user } = useUserStore()

  const counterSize = useMemo(() => {
    if (totalItems > 99) return '45px'
    if (totalItems >= 10) return '40px'
    return '35px'
  }, [totalItems]);

  const location = useLocation();
  const place = location.pathname
  const atHome = location.pathname === '/'

  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) setIsBurgered(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <header >

      <nav className={!atHome ? 'header-green' : ''}>

        <div className={`header-left ${user ? 'header-left-logged-in' : ''}`}>
          <NavLink to='/' className="navlink-logo-h" tabIndex={atHome ? -1 : 0} data-home={atHome}>
            <img src={logo} className="logo" alt="logo of Professional Misconduct" />
          </NavLink>

          <NavLink to='/about' className="btn-header burger-hidden btn-anim" tabIndex={place === '/about' ? -1 : 0}
            data-home={atHome}>
            ABOUT
          </NavLink>

          <NavLink to='/products' end className="btn-header burger-hidden btn-anim" tabIndex={place === '/products' ? -1 : 0}
            data-home={atHome}
          > PRODUCTS</NavLink>
        </div>
        <div className={`header-right ${user ? 'header-right-logged-in' : ''}`}>


          <div className={`cart-and-counter btn-anim ${place === '/cart' ? 'active' : ''}`} data-home={atHome} >
            <NavLink to='cart' className="btn-header" tabIndex={place === '/cart' ? -1 : 0}> CART</NavLink>
            {totalItems !== 0 && <div style={{ width: counterSize, height: counterSize, color: 'var(--text)' }}>{totalItems}</div>}
          </div>
          <div className='email-display' data-admin={isAdmin}>
            <p>{user ? user.email : ''}</p>
            <span>{user ? '★' : ''}</span>
          </div>
          <LoginHeaderHud />
        </div>

        <div ref={ref}>
          <BurgerButton
            setIsBurgered={setIsBurgered}
            isBurgered={isBurgered}
            user={user}
            set={true}
          />
          {isBurgered && <Hamburger
            setIsBurgered={setIsBurgered}
            isBurgered={isBurgered}
            user={user}
            totalItems={totalItems}>
          </Hamburger>}
        </div>

        <NavLink to={-1} style={atHome ? { display: "none" } : null} className="navlink-back-btn">
          <BackBtn />
        </NavLink>

      </nav>
    </header >
  )
}