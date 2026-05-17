import { NavLink, useLocation } from 'react-router'
import logo from '../../assets/logo.svg';

export default function Footer() {


  const location = useLocation()

  const atHome = location.pathname === '/'

  return (
    <>
      <footer>
        <NavLink to='/' className="navlink-logo-f"
          data-home={atHome} tabIndex={atHome ? -1 : 0}>
          <img src={logo} className="logo" alt="logo of Professional Misconduct" />
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
      </footer>
    </>
  )
}