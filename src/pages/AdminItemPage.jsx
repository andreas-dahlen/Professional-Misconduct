import { useState } from 'react'
import { NavLink } from 'react-router'
import { useFindProduct } from '../hooks/utils/useFindProduct'
import { useDeleteProductHandler } from '../hooks/crudHandlers/useDeleteProductHandler'
import { useAsyncAction } from '../hooks/utils/useAsyncAction.js'
import ProductItem from '../components/products/ProductItem'
import ProductError from '../components/products/ProductError.jsx'
import YesNoPopup from '../components/products/YesNoPopup.jsx'

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