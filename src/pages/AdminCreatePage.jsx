import { useState } from 'react'

import ProductForm from '../components/products/ProductForm'
import { useCreateProductHandler } from '../hooks/crudHandlers/useCreateProductHandler'
import { toast } from 'sonner'

export default function AdminCreatePage() {


  const [changes, setChanges] = useState({ name: '', profession: '', description: '', price: '' })
  const [awaiting, setAwaiting] = useState(false)

  const { createProductHandler } = useCreateProductHandler()

  const onSave = async () => {
    setAwaiting(true)
    toast.loading('loading...', { id: 'sonner' })
    const result = await createProductHandler(changes)
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
    <ProductForm
      changes={changes}
      setChanges={setChanges}
      onSave={onSave}
      awaiting={awaiting}
    />
  )
}