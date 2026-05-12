import { useFindProduct } from '../hooks/useFindProduct'
import ProductItem from '../components/products/ProductItem'
import { useCartStore } from '../hooks/storeHooks/useCartStore'
import ProductMissing from '../components/products/ProductMissing'

export default function ProductItemPage() {

  const { prod, path } = useFindProduct()
  const { addToCart } = useCartStore()

  if (!prod) return (<ProductMissing
    path={path}
  />
  )

  return (
    <main>
      <ProductItem prod={prod}>
        <button className='semi-big-btn' onClick={() => addToCart(prod)}>Add to cart</button>
      </ProductItem>
    </main>
  )
}