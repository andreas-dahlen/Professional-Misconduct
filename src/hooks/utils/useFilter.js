import { useMemo } from 'react'
import Fuse from 'fuse.js'

export function useFilter(products, search) {

  const myFuse = useMemo(() => {
    return new Fuse(products, {
      keys: [
        { name: 'name', weight: 2 },
        { name: 'profession', weight: 1 }
      ],
      includeScore: true,
      threshold: 0.3,
    })
  }, [products])
  return search
    ? myFuse.search(search).map(r => r.item)
    : products
}