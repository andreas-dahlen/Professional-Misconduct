import { redirect } from 'react-router'
import { userStore } from '../../store/userStore'

export async function ifAuthed() {
  const { user } = userStore.getState()
  if (user) throw redirect('/')
  return null
}