import { useProductStore } from '../storeHooks/useProductStore'
import { useUserStore } from '../storeHooks/useUserStore'
import { useNavigate } from 'react-router'

export function useProductNavigation() {

  const { setLastVisitedId } = useProductStore()
  const { user, isAdmin } = useUserStore()

  const goTo = useNavigate()

  const productNavigation = (name, id) => {
    const urlName = name.replace(/\s/g, '')
    setLastVisitedId(id)
    isAdmin && user
      ? goTo(`${urlName}/${id}/admin`)
      : goTo(`${urlName}/${id}`)
  }
  return { productNavigation }

}

