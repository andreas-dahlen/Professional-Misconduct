import { useNavigate } from 'react-router'
import { resetDBProducts } from '../../data/crud'
import { useProductStore } from '../storeHooks/useProductStore'

export function useResetProductsHandler() {
  const goTo = useNavigate()
  const { setProducts } = useProductStore()

  const resetProductsHandler = async (backupProductsList) => {
    const result = await resetDBProducts(backupProductsList)
    if (result?.error) return { error: result.error }
    setProducts(result)
    goTo('/products')
  }
  return { resetProductsHandler }
}
