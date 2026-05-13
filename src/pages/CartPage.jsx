import { useCartStore } from '../hooks/storeHooks/useCartStore'
import CartItem from '../components/cart/CartItem'
import { NavLink } from 'react-router'

export default function CartPage() {
  const { cartItems, clearCart, totalPrice } = useCartStore()

  const handlePayment = () => {
    //TODO handle payment!
    clearCart()
  }

  if (cartItems.length === 0) {
    return (
      <main className='cart-main'>
        <h1>Cart is empty</h1>
        <NavLink className="btn-semi-big btn-anim" to='/products'>to products</NavLink>
      </main>
    )
  } else {
    return (
      <main className='cart-main'>
        <h1>Cart</h1>

        {cartItems.length === 2
          ? <CartItem
            key={cartItems[0].id}
            item={cartItems[0]}
            single={true}
          />
          : cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

        {cartItems.length !== 0 && <h1>totalPrice: {totalPrice}</h1>}


        <button className='btn-semi-big btn-anim' onClick={handlePayment}>Commit to the Chaos <br /> Checkout</button>
      </main>
    )
  }
}