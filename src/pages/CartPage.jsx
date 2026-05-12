import { useCartStore } from '../hooks/storeHooks/useCartStore'
import CartItem from '../components/cart/CartItem'
import { NavLink } from 'react-router'

export default function CartPage() {
  const { cartItems, clearCart, totalPrice } = useCartStore()

  const handlePayment = () => {
    clearCart()
  }

  if (cartItems.length === 0) {
    return (
      <main>
        <h1>Cart is empty</h1>
        <NavLink className="semi-big-btn" to='/products'>to products</NavLink>
      </main>
    )
  } else {
    return (
      <main>
        <h1>Cart</h1>

        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
          />
        ))}

        {cartItems.length !== 0 && <h1>totalPrice: {totalPrice}</h1>}

        <button className='semi-big-btn' onClick={handlePayment}>Procceed to payment</button>
      </main>
    )
  }
}