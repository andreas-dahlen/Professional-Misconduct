import { useShallow } from 'zustand/shallow';
import { userStore } from '../store/userStore';

export const useUserStore = () => {

  return userStore(
    useShallow((s) => ({
      user: s.user ?? {},
      isAdmin: s.isAdmin ?? false,
      setUser: s.setUser,
      deleteUser: s.deleteUser,
      setIsAdmin: s.setIsAdmin
    }))
  )
} 