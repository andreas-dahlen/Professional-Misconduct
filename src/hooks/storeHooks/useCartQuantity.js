
import { cartStore } from '../../store/cartStore'

export const useCartQuantity = (name) => {

  return cartStore(
    state =>
      state.cartItems.find(i => i.name === name)?.quantity ?? 0
  )
}