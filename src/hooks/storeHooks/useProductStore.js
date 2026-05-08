import { useShallow } from 'zustand/shallow';
import { productStore } from '../../store/productStore';

export const useProductStore = () => {

  return productStore(
    useShallow((s) => ({
      products: s.products ?? [],
      lastVisitedId: s.lastVisitedId,
      setLastVisitedId: s.setLastVisitedId
    }))
  )
} 