import { useState } from 'react'
import { NavLink } from 'react-router'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useResetProductsHandler } from '../../hooks/crudHandlers/useResetProductsHandler'
import { backupProductsList } from '../../data/backupProductsList'
import { useAsyncAction } from '../../hooks/useAsyncAction'
import YesNoPopup from './YesNoPopup'

export default function AdminProductControls() {
  const { user, isAdmin } = useUserStore()

  const [resetConfirm, setResetConfirm] = useState(false)

  const { resetProductsHandler } = useResetProductsHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const handleAccept = () => {
    setResetConfirm(false)
    asyncAction(() => resetProductsHandler(backupProductsList), 'product factory reset!')
  }

  if (!user || !isAdmin) return null
  return (
    <>
      {resetConfirm &&
        <YesNoPopup
          message="Are you sure you want to reset the products to default?"
          handleAccept={handleAccept}
          handleReject={setResetConfirm}
          isDisabled={isDisabled}
        />
      }
      <div className='product-page-controls'>
        <NavLink to='/products/create' onClick={e => isDisabled && e.preventDefault()} className="btn-semi-big btn-anim">Create</NavLink>
        <button className="btn-semi-big btn-anim" onClick={() => setResetConfirm(true)} disabled={isDisabled}>Reset</button>
      </div>
    </>
  )
}



