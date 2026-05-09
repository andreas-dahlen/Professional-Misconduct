import { redirect } from 'react-router'
import { userStore } from '../store/userStore'

export async function requireAuth() {
  const { user, isAdmin } = userStore.getState()
  if (!user || !isAdmin) throw redirect('/products')
  return null
}