import { findImg } from '../../hooks/utils/findImg'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useCartStore } from '../../hooks/storeHooks/useCartStore'
import { useCartQuantity } from '../../hooks/storeHooks/useCartQuantity'

export default function ProductItem({ prod }) {

  const { isAdmin } = useUserStore()
  const { addToCart } = useCartStore()
  const quantity = useCartQuantity(prod.name);
  return (
    <>
      <article className='product-item'>

        <div className='product-item-box' data-admin={isAdmin}>

          <div className='product-item-content'>


            <div className='content-box'>
              <h1>{prod.name}</h1>
              <h3>{prod.profession}</h3>
              <div className='product-img'>
                <img src={findImg(prod.img)} />
              </div>
              <div className='text-bg-box'>

                <p className='description'>{prod.description}</p>
                <h2>{prod.price} kr</h2>
                <p>{quantity ? `added to cart: ${quantity}` : ' '}</p>
                <button className='btn-semi-big btn-anim' onClick={() => addToCart(prod)}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </article >

    </>
  )
}