import { createPortal } from 'react-dom'
import BurgerButton from './BurgerButton'
import { NavLink, useLocation } from 'react-router'
import logo from '../../assets/logo.svg';
import LoginHeaderHud from './LoginHeaderHud';
import { useUserStore } from '../../hooks/storeHooks/useUserStore';


export default function Hamburger({ setIsBurgered, isBurgered, user, totalItems }) {

  const { isAdmin } = useUserStore()
  const location = useLocation();
  const place = location.pathname
  const atHome = location.pathname === '/'

  return (
    createPortal(
      <div className='burger-space'>

        <div className='absolute-logo'>
          <NavLink to='/' className="navlink-logo-h logo-anim" tabIndex={atHome ? -1 : 0} data-home={atHome}>
            <img src={logo} className="logo" alt="logo of Professional Misconduct" />
          </NavLink>

        </div>
        <div className='burger-spacer' />
        <div className='burger-box'>

          <div className='burger-left'>
            <NavLink to='/about' className="btn-def burger-hidden btn-anim" tabIndex={place === '/about' ? -1 : 0}
              data-home={atHome}>
              ABOUT
            </NavLink>

            <NavLink to='/products' end className="btn-def burger-hidden btn-anim" tabIndex={place === '/products' ? -1 : 0}
              data-home={atHome}
            > PRODUCTS</NavLink>
          </div>

          <div className='hamburger-img'>
            <NavLink to='/' className="navlink-logo-h logo-anim" tabIndex={atHome ? -1 : 0} data-home={atHome}>
              <img src={logo} className="logo" alt="logo of Professional Misconduct" />
            </NavLink>
          </div>



          <div className='burger-right'>
            <div className='btn-and-counter'>
              <NavLink className={`btn-def cart-and-counter btn-anim ${place === '/cart' ? 'active' : ''}`} data-home={atHome} tabIndex={place === '/cart' ? -1 : 0} to={'/cart'}>CART
              </NavLink>
              {totalItems !== 0 && <div className='burger-amount-in-cart'>{totalItems}</div>}
            </div>
            <LoginHeaderHud
              burgerStyle={true}
            />
          </div>
        </div>

        <div className='burger-btn-wrapper'>
          <BurgerButton
            setIsBurgered={setIsBurgered}
            isBurgered={isBurgered}
            user={user}
            set={false}
            override={true}
          />
        </div>
        <div className='email-display' data-admin={isAdmin}>
          <p>{user ? user.email : ''}</p>
        </div>
      </div >


      , document.body
    )

  )
}