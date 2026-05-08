import { useEffect } from 'react';
import { productStore } from '../../store/productStore';
import { getDBProducts } from '../../data/crud';

export function usePopulateStore() {
  useEffect(() => {
    if (productStore.getState().products.length > 0) return

    async function fetch() {
      const list = await getDBProducts()
      productStore.getState().setProducts(list)
    }
    fetch()
  }, [])
}