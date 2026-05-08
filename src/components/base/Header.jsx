import { NavLink } from 'react-router';
import logo from "../../assets/logo.svg";
import { useCartStore } from '../../hooks/storeHooks/useCartStore';

export default function Header() {

  const { totalItems } = useCartStore()

  return (
    <header>

      <NavLink to='/' className="navlink-logo-h">

        <img src={logo} className="logo" alt="logo of Professional Misconduct"></img>
      </NavLink>

      <div className='products-and-cart'>
        <NavLink to='/products' className="def-btn"> PRODUCTS</NavLink>

        <div className='cart-and-counter'>
          <NavLink to='cart' className="def-btn"> CART </NavLink>
          <div>{totalItems}</div>
        </div>
      </div>

    </header>
  )
}