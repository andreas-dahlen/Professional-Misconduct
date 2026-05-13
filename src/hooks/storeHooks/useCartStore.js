import { useShallow } from 'zustand/shallow';
import { cartStore } from '../../store/cartStore';

export const useCartStore = () => {

  return cartStore(
    useShallow((s) => ({
      cartItems: s.cartItems,
      totalPrice: s.totalPrice ?? 0,
      totalItems: s.totalItems ?? 0,
      clearCart: s.clearCart,
      addToCart: s.addToCart,
      removeFromCart: s.removeFromCart,
    }))
  )
} 