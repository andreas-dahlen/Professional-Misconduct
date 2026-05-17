import { useParams } from 'react-router'
import { useProductStore } from '../storeHooks/useProductStore'

export function useFindProduct() {
  const path = useParams()
  const { products } = useProductStore()
  const prod = products.find(p => p.id === Number(path.id))
  return { prod, path }
}