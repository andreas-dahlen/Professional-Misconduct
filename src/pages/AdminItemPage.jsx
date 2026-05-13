import { useFindProduct } from '../hooks/useFindProduct'
import ProductItem from '../components/products/ProductItem'
import { NavLink } from 'react-router'
import { useDeleteProductHandler } from '../hooks/crudHandlers/useDeleteProductHandler'
import ProductError from '../components/products/ProductError.jsx'
import { toast } from 'sonner'
import { useState } from 'react'

export default function AdminItemPage() {

  const { prod, path } = useFindProduct()
  const { deleteProductHandler } = useDeleteProductHandler()
  const [awaiting, setAwaiting] = useState(false)

  const handleDeletion = async () => {
    setAwaiting(true)
    toast.loading('loading...', { id: 'sonner' })
    const result = await deleteProductHandler(prod)

    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
      setAwaiting(false)
      return
    }
    toast.success('Product deleted!', { id: 'sonner', duration: 3000 })
  }

  return (
    <main>
      {!prod
        ? <ProductError path={path} />
        :
        <ProductItem prod={prod}>
          <div>
            <NavLink to={`/products/${prod.name}/${prod.id}/admin/edit`} className="btn-def btn-anim">edit</NavLink>
            <button className='btn-def btn-anim' onClick={handleDeletion} disabled={awaiting}>delete</button>

          </div>
        </ProductItem>
      }

    </main>
  )
}