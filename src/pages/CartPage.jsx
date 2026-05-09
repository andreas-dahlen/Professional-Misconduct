import { useCartStore } from '../hooks/storeHooks/useCartStore'
import CartItem from '../components/cart/CartItem'
import { NavLink } from 'react-router'

export default function CartPage() {
  const { cartItems, clearCart, totalPrice } = useCartStore()


  const Empty = () => {
    return (
      <>
        <h1>Cart is empty</h1>
        <NavLink to={-1}>back</NavLink>
      </>
    )
  }

  return (
    <main>
      <div>i am cart page</div>

      {cartItems.length === 0
        ? Empty()
        : ''}

      <button onClick={() => clearCart()}>clear cart</button>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          profession={item.profession}
          img={item.img}
          description={item.description}
          price={item.price}
        ></CartItem>
      ))}

      {cartItems.length !== 0 && <h1>totalPrice: {totalPrice}</h1>}
    </main>
  )
}