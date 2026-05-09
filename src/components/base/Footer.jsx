import { NavLink, useLocation } from 'react-router'
import { imgPath } from '../../data/settings'

export default function Footer() {


  const location = useLocation()

  const atHome = location.pathname === '/'

  return (
    <>
      <footer>
        <NavLink to='/' className="navlink-logo-f">
          <img src={`${imgPath}logo.svg`} className="logo" style={atHome ? { cursor: 'default' } : null} alt="logo of Professional Misconduct"></img>
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