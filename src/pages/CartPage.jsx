import { useCartStore } from '../hooks/storeHooks/useCartStore'
import CartItem from '../components/cart/CartItem'

export default function CartPage() {
  const { cartItems, clearCart, totalPrice } = useCartStore()

  return (
    <main>
      <div>i am cart page</div>


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

      <h1>totalPrice: {totalPrice}</h1>
    </main>
  )
}