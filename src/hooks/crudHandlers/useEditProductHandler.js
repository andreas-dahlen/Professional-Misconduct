import { useNavigate } from 'react-router'
import { editProduct } from '../../data/crud'
import { useProductStore } from '../storeHooks/useProductStore'

export function useEditProductHandler() {
  const goTo = useNavigate()
  const { updateProduct } = useProductStore()

  const editProductHandler = async (changes) => {
    const result = await editProduct(changes)
    if (result?.error) return { error: result.error }
    updateProduct(changes)
    goTo(-1)
  }
  return { editProductHandler }
}


