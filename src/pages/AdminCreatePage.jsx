import { useState } from 'react'

import ProductForm from '../components/products/ProductForm'
import { useCreateProductHandler } from '../hooks/crudHandlers/useCreateProductHandler'

export default function AdminCreatePage() {


  const [changes, setChanges] = useState({ name: '', profession: '', description: '', price: '' })

  const { createProductHandler } = useCreateProductHandler()

  const onSave = () => {
    createProductHandler(changes)
  }

  return (
    <ProductForm
      changes={changes}
      setChanges={setChanges}
      onSave={onSave}
    />
  )
}