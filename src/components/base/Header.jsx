import { NavLink } from 'react-router';
import logo from "../../assets/logo.svg";

export default function Header() {

  return (
    <header>

      <NavLink to='/' className="navlink-logo-h">

        <img src={logo} className="logo" alt="logo of Professional Misconduct"></img>
      </NavLink>

      <div className='products-and-cart'>
        <NavLink to='/products' className="def-btn"> PRODUCTS</NavLink>
        <NavLink to='cart' className="def-btn"> CART </NavLink>
      </div>

    </header>
  )
}