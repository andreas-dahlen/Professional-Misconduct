import { useState } from 'react'
import { NavLink } from 'react-router'
import { useCartStore } from '../hooks/storeHooks/useCartStore'
import CartItem from '../components/cart/CartItem'
import PaymentSuccess from '../components/products/PaymentSuccess'

export default function CartPage() {
  const { cartItems, clearCart, totalPrice } = useCartStore()

  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handlePayment = () => {
    clearCart()
    setPaymentSuccess(true)
  }

  if (paymentSuccess) return <PaymentSuccess />
  if (cartItems.length === 0) {
    return (
      <main className='cart-main'>
        <h1 className='h-margin-down'>Suspiciously Empty</h1>
        <NavLink className="btn-semi-big btn-anim" to='/products'>to products</NavLink>
      </main>
    )
  } else {
    return (
      <main className='cart-main'>
        <h1>Your Misconduct</h1>
        <div className='cart-outline'>
          <div className='cart-background'>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
        {cartItems.length !== 0 && <h1>total Price: {totalPrice} kr</h1>}

        <h3>Commit to the Chaos</h3>

        <button className='btn-semi-big btn-anim' onClick={handlePayment}> Checkout</button>
      </main>
    )
  }
}