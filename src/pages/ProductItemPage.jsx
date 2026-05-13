import { useFindProduct } from '../hooks/useFindProduct'
import ProductItem from '../components/products/ProductItem'
import ProductError from '../components/products/ProductError'

export default function ProductItemPage() {

  const { prod, path } = useFindProduct()

  return (
    <main>

      {!prod
        ? <ProductError path={path} />
        : <ProductItem prod={prod} />
      }
    </main>
  )
}