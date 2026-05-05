import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const productStore = create(
  persist(
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
)