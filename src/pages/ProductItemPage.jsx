import { useFindProduct } from '../hooks/useFindProduct'
import ProductCard from '../components/products/ProductCard'
import { useCartStore } from '../hooks/storeHooks/useCartStore'
import { NavLink } from 'react-router'

export default function ProductItemPage() {

  const prod = useFindProduct()
  const { addToCart } = useCartStore()

  if (!prod) return (
    <main>
      <p className='slogan'> product not found </p>
      <NavLink to={-1} className="def-btn">BACK</NavLink>
    </main>
  )

  return (
    <main>
      <ProductCard prod={prod}>
        <button className='def-btn' onClick={() => addToCart(prod)}>Add to cart</button>
      </ProductCard>
    </main>
  )
}