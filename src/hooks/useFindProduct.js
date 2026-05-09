import { useParams } from 'react-router'
import { useProductStore } from './storeHooks/useProductStore'

export function useFindProduct() {
  const { id } = useParams()
  const { products } = useProductStore()
  const prod = products.find(p => p.id === Number(id))
  return prod
}