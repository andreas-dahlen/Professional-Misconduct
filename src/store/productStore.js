import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const productStore = create(
  persist(
    immer(set => ({

      products: [],
      // fix an ordering list?

      scrollPosition: 0,

      setProducts: (list) => {
        set(s => {
          s.products = list
        })
      },
      saveScrollPosition: (scroll) => {
        set(s => {
          s.scrollPosition = scroll
          console.log('savedPosition: ', scroll)
        })
      }
    })
    )
  )
)