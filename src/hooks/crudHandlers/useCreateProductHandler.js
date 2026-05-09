import { useNavigate } from 'react-router'
import { addProduct as addCrudProduct } from '../../data/crud'
import { useProductStore } from '../storeHooks/useProductStore'

export function useCreateProductHandler() {
  const goTo = useNavigate()
  const { products, addProduct } = useProductStore()

  const createProductHandler = async (newProduct) => {
    const newId = Math.max(...products.map(p => p.id)) + 1
    const result = await addCrudProduct({ ...newProduct, id: newId })
    if (result?.error) return { error: result.error }
    addProduct(result)
    goTo(-1)
  }
  return { createProductHandler }
}


