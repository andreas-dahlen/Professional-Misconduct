import logo from '../../assets/logo.svg'

import { NavLink } from 'react-router'

export default function Footer() {

  return (
    <>
      <footer>
        <NavLink to='/' className="navlink-logo-f">
          <img src={logo} className="logo" alt="logo of Professional Misconduct"></img>
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

        <NavLink to='/login' className="login-button">login</NavLink>
      </footer>
    </>
  )
}