import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const userStore = create(
  persist(
    immer(set => ({

      user: {},
      isAdmin: false,

      setUser: (user) => {
        set(s => {
          s.user = user
        })
      },
      deleteUser: () => {
        set(s => {
          s.user = {}
        })
      },
      setIsAdmin: (boolean) => {
        set(s => {
          // s.isAdmin = uid === "temporary uid can be set here"
          s.isAdmin = boolean
        })
      }
    })),

    //decides what can be saved in local storage
    {
      name: 'user-store',
      partialize: (s) => ({ user: s.user })
    }
  )
)