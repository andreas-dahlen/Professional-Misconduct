import { useFindProduct } from '../hooks/useFindProduct'
import ProductItem from '../components/products/ProductItem'
import { NavLink } from 'react-router'
import { useDeleteProductHandler } from '../hooks/crudHandlers/useDeleteProductHandler'
import ProductError from '../components/products/ProductError.jsx'
import { useAsyncAction } from '../hooks/useAsyncAction.js'
import YesNoPopup from '../components/products/YesNoPopup.jsx'
import { useState } from 'react'

export default function AdminItemPage() {

  const [deleteConfirm, setDeleteConfirm] = useState()

  const { prod, path } = useFindProduct()
  const { deleteProductHandler } = useDeleteProductHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const handleDeletion = async () => {
    asyncAction(() => deleteProductHandler(prod), 'product deleted!')
  }

  return (
    <main>
      {!prod
        ? <ProductError path={path} />
        : <>
          {deleteConfirm && <YesNoPopup
            message={`Are you sure you want to delete ${prod.name}?`}
            handleAccept={handleDeletion}
            handleReject={setDeleteConfirm}
            isDisabled={isDisabled}
          />}
          <div className='product-page-controls'>
            <NavLink to={`/products/${prod.name}/${prod.id}/admin/edit`} onClick={e => isDisabled && e.preventDefault()} className="btn-semi-big btn-anim">edit</NavLink>
            <button className='btn-semi-big btn-anim' onClick={() => setDeleteConfirm(true)} disabled={isDisabled}>delete</button>


          </div>
          <ProductItem prod={prod} />
        </>
      }

    </main>
  )
}