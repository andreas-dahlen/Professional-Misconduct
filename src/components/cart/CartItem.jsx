import { imgPath } from '../../data/settings'
import { useCartQuantity } from '../../hooks/storeHooks/useCartQuantity'
import { useCartStore } from '../../hooks/storeHooks/useCartStore'

export default function CartItem({ item, single }) {

  const { addToCart, removeFromCart } = useCartStore()

  const quantity = useCartQuantity(item.name)

  return (

    <article id={`product-${item.id}`} className={`${single ? 'individual-cart-card' : 'cart-card cart-card-anim'}`}>
      <h2>{item.name}</h2>
      <div className='img-and-text'>
        <div className='product-img'>
          <img src={imgPath + item.img} />
        </div>
      </div>

      <div className='remove-quantity-add'>
        <button className='add-btn btn-anim'
          onClick={() => removeFromCart(item.name)}>
          -
        </button>

        <p>quantity: {quantity} </p>

        <button className='add-btn btn-anim'
          onClick={() => addToCart(item)}>
          +
        </button>
      </div>
      <h3>{item.price} kr</h3>
    </article >
  )
}