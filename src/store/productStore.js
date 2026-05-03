import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const productStore = create(
  immer((set, get) => ({

    products: [],
    // fix an ordering list?

    setProducts: (list) => {
      set(s => {
        s.products = list
      })
    }
  })
  )
)