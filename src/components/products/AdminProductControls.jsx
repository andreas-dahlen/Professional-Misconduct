import { useState } from 'react'
import { NavLink } from 'react-router'
import { toast } from 'sonner'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useResetProductsHandler } from '../../hooks/crudHandlers/useResetProductsHandler'
import { backupProductsList } from '../../data/backupProductsList'

export default function AdminProductControls() {
  const { user, isAdmin } = useUserStore()

  const [resetConfirm, setResetConfirm] = useState(false)
  const [awaiting, setAwaiting] = useState(false)

  const { resetProductsHandler } = useResetProductsHandler()

  const handleAccept = async () => {
    setAwaiting(true)
    toast.loading('loading...', { id: 'sonner' })
    const result = await resetProductsHandler(backupProductsList)

    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
      setAwaiting(false)
      return
    }
    toast.success('done!', { id: 'sonner', duration: 3000 })
    setResetConfirm(false)
    setAwaiting(false)
  }

  if (!user || !isAdmin) return null
  return (
    <div className='product-page-controls'>
      <NavLink to='/products/create'>Create New Product</NavLink>
      <button onClick={() => setResetConfirm(true)}>Reset Products</button>
      {resetConfirm
        ?
        //TODO try dialog element
        <div className='confirm-popup'>
          <h1>Are you sure you want to reset the products to default?</h1>
          <div className='accept-Reject' />
          <button className="def-btn" onClick={handleAccept} disabled={awaiting}>YES</button>
          <button className="def-btn" onClick={() => setResetConfirm(false)} disabled={awaiting}>NO</button>
        </div>
        : ''
      }
    </div>
  )
}



