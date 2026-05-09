import { useNavigate } from 'react-router'
import { deleteProduct as deleteCrudProduct } from '../../data/crud'
import { useProductStore } from '../storeHooks/useProductStore'

export function useDeleteProductHandler() {
  const goTo = useNavigate()
  const { deleteProduct } = useProductStore()

  const deleteProductHandler = async (prod) => {
    const result = await deleteCrudProduct(prod.uid)
    if (result?.error) return { error: result.error }
    deleteProduct(prod.id)
    goTo(-1)
  }
  return { deleteProductHandler }
}

