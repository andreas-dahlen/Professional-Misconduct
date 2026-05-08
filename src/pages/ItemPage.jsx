import { NavLink, useParams } from 'react-router';
import { useProductStore } from '../hooks/storeHooks/useProductStore';
import { useCartStore } from '../hooks/storeHooks/useCartStore';

export default function ProductItemPage() {
  const src = "/Professional-Misconduct/src/assets/"
  const { id } = useParams()

  const { products } = useProductStore()
  const { addToCart } = useCartStore()

  const prod = products.find(p => p.id === Number(id))

  return (
    //TODO if prod return... else return couldn't find item, navigate to all products button?
    <main>

      <div className='product-card'>

        <h2>{prod.name}</h2>
        <h3>{prod.profession}</h3>

        <div className='img-and-text'>
          <p className='description'>{prod.description}</p>
          <div className='product-img'>
            <img src={src + prod.img}></img>
          </div>

        </div>

        <h3>{prod.price}</h3>
        <button className='def-btn' onClick={() => addToCart(prod)}>Add to cart</button>
      </div >

      <NavLink to={-1} className="def-btn">BACK</NavLink>
    </main>
  )
}