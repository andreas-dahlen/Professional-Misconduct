import { useFindProduct } from '../hooks/utils/useFindProduct'
import { useState } from 'react'

import ProductForm from '../components/products/ProductForm'
import { useEditProductHandler } from '../hooks/crudHandlers/useEditProductHandler'
import ProductError from '../components/products/ProductError'
import { useAsyncAction } from '../hooks/utils/useAsyncAction'

export default function AdminEditPage() {

  const { prod, path } = useFindProduct()

  const [changes, setChanges] = useState(prod)

  const { editProductHandler } = useEditProductHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const onSave = async () => {
    asyncAction(() => editProductHandler(changes), 'edits saved!')
  }

  return (
    !prod ?
      <ProductError path={path} />
      : <ProductForm
        changes={changes}
        setChanges={setChanges}
        onSave={onSave}
        isDisabled={isDisabled}
      />
  )
}