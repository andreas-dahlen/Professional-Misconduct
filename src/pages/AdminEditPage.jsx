import { useFindProduct } from '../hooks/useFindProduct'
import { useState } from 'react'

import ProductForm from '../components/products/ProductForm'
import { useEditProductHandler } from '../hooks/crudHandlers/useEditProductHandler'

export default function AdminEditPage() {

  const prod = useFindProduct()

  const [changes, setChanges] = useState(prod)

  const { editProductHandler } = useEditProductHandler()

  const onSave = () => {
    editProductHandler(changes)
  }

  return (
    <ProductForm
      changes={changes}
      setChanges={setChanges}
      onSave={onSave}
    />
  )
}