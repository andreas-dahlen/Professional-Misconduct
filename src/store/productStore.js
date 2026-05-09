import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const productStore = create(
  persist(
    immer(set => ({

      products: [],

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
      },
      updateProduct: (changedProd) => {
        set(s => {
          const index = s.products.findIndex(p => p.id === changedProd.id)
          if (index !== -1) s.products[index] = changedProd
        })
      },

      addProduct: (item) => {
        set(s => {
          s.products.push(item)
        })
      },

      deleteProduct: (id) => {
        set(s => {
          s.products = s.products.filter(p => p.id !== id)
        })
      }
    })
    )
  )
)