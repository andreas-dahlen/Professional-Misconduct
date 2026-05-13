import { useFindProduct } from '../hooks/useFindProduct'
import ProductItem from '../components/products/ProductItem'
import { NavLink } from 'react-router'
import { useDeleteProductHandler } from '../hooks/crudHandlers/useDeleteProductHandler'
import ProductMissing from '../components/products/ProductMissing'

export default function AdminItemPage() {

  const { prod, path } = useFindProduct()
  const { deleteProductHandler } = useDeleteProductHandler()

  const handleDeletion = () => {
    deleteProductHandler(prod)
  }

  if (!prod) return (<ProductMissing
    path={path}
  />
  )

  return (
    <main>

      <ProductItem prod={prod}>
        <NavLink to={`/products/${prod.name}/${prod.id}/admin/edit`} className="def-btn btn-anim">edit</NavLink>
        <button className='def-btn btn-anim' onClick={handleDeletion}>delete</button>
      </ProductItem>

    </main>
  )
}