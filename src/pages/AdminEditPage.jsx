import { useFindProduct } from '../hooks/useFindProduct'
import { useState } from 'react'

import ProductForm from '../components/products/ProductForm'
import { useEditProductHandler } from '../hooks/crudHandlers/useEditProductHandler'
import { toast } from 'sonner'
import ProductError from '../components/products/ProductError'

export default function AdminEditPage() {

  const { prod, path } = useFindProduct()

  const [changes, setChanges] = useState(prod)
  const [awaiting, setAwaiting] = useState(false)

  const { editProductHandler } = useEditProductHandler()

  const onSave = async () => {
    setAwaiting(true)
    toast.loading('loading...', { id: 'sonner' })
    const result = await editProductHandler(changes)

    if (result?.error) {
      toast.error(result.error, {
        id: 'sonner', duration: Infinity
      })
      setAwaiting(false)
      return
    } else {
      toast.success('success!', { id: 'sonner', duration: 3000 })
    }
  }

  return (
    !prod ?
      <ProductError path={path} />
      : <ProductForm
        changes={changes}
        setChanges={setChanges}
        onSave={onSave}
        awaiting={awaiting}
      />
  )
}