import { useFindProduct } from '../hooks/useFindProduct'
import ProductCard from '../components/products/ProductCard'
import { NavLink } from 'react-router'


export default function AdminItemPage() {

  const prod = useFindProduct()



  if (!prod) return (
    <main>
      <p className='slogan'> product not found </p>
      <NavLink to={-1} className="def-btn">BACK</NavLink>
    </main>
  )

  return (
    <main>

      <ProductCard prod={prod}>
        <NavLink to={`/products/${prod.name}/${prod.id}/admin/edit`}>edit</NavLink>
      </ProductCard>

    </main>
  )
}