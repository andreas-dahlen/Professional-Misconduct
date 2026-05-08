import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const cartStore = create(
  persist(
    immer(set => ({

      cartItems: [],
      totalPrice: 0,
      totalItems: 0,

      clearCart: () => {
        set(s => {
          s.cartItems = []
          s.totalPrice = 0
          s.totalItems = 0
        })
      },

      addToCart: (item) => {
        set(s => {
          const itemExisting = s.cartItems.find(i => i.name === item.name)
          itemExisting
            ? itemExisting.quantity += 1
            : s.cartItems.push({ ...item, quantity: 1 })

          s.totalPrice += Number(item.price)
          s.totalItems = s.cartItems.reduce((total, item) => total + item.quantity, 0)
        })
      },

      removeFromCart: (name) => {
        set(s => {
          const itemExisting = s.cartItems.find(i => i.name === name)
          if (!itemExisting) return

          itemExisting > 1
            ? itemExisting.quantity -= 1
            : s.cartItems = s.cartItems.filter(i => i.name !== name)

          s.totalPrice -= Number(itemExisting.price)
          s.totalItems = s.cart.reduce((total, item) => total + item.quantity, 0)
        })
      }
    })
    )
  )
)