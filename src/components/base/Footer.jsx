import logo from '../../assets/logo.svg'

import { NavLink } from 'react-router'

export default function Footer() {

  return (
    <footer>


      <NavLink to='/' className="navlink-logo-h">
        <img src={logo} className="logo" alt="logo of Professional Misconduct"></img>
      </NavLink>

      <p>Sjöviksgatan 14B
        417 56
        Gothenburg
        Sweden</p>

      <p>Contact us:
        0123 456 789
        mischief@gmail.com</p>

      <NavLink to='/login'>login</NavLink>
    </footer>
  )
}