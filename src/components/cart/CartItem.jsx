import { findImg } from '../../hooks/utils/findImg'
import { useCartQuantity } from '../../hooks/storeHooks/useCartQuantity'
import { useCartStore } from '../../hooks/storeHooks/useCartStore'

export default function CartItem({ item }) {

  const { addToCart, removeFromCart } = useCartStore()

  const quantity = useCartQuantity(item.name)

  return (

    <article id={`product-${item.id}`} className='cart-card cart-card-anim'>

      <div className='cart-row'>

        <div className='product-img'>
          <img src={findImg(item.img)} />
        </div>

        <div className='cart-content'>
          <h1>{item.name}</h1>
          <div className='remove-quantity-add'>

            <h4>quantity: {quantity} </h4>
            <button className='btn-add btn-anim'
              onClick={() => removeFromCart(item.name)}>
              -
            </button>

            <button className='btn-add btn-anim'
              onClick={() => addToCart(item)}>
              +
            </button>
          </div>
          <h3>{item.price} kr</h3>
        </div>
      </div>
    </article >
  )
}