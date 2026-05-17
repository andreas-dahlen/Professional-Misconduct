import { useState } from 'react'

import ProductForm from '../components/products/ProductForm'
import { useCreateProductHandler } from '../hooks/crudHandlers/useCreateProductHandler'
import { useAsyncAction } from '../hooks/utils/useAsyncAction'

export default function AdminCreatePage() {


  const [changes, setChanges] = useState({ name: '', profession: '', description: '', price: '', img: '' })

  const { createProductHandler } = useCreateProductHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const onSave = async () => {
    asyncAction(() => createProductHandler(changes), 'product created!')
  }

  return (
    <ProductForm
      changes={changes}
      setChanges={setChanges}
      onSave={onSave}
      isDisabled={isDisabled}
    />
  )
}