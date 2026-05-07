import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const productStore = create(
  persist(
    immer(set => ({

      products: [],
      // fix an ordering list?

      lastVisitedId: '',

      scrollPosition: 0,

      setProducts: (list) => {
        set(s => {
          s.products = list
        })
      },
      setLastVisitedId: (id) => {
        set(s => {
          s.lastVisitedId = id
        })
      }
    })
    )
  )
)