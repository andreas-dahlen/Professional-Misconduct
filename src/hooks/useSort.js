import { useMemo } from 'react'
import Fuse from 'fuse.js'

export function useSort(products, search) {

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

export function defaultIdSort(productList) {
  return productList.sort((one, two) => {
    if (one.id < two.id) {
      return -1
    } else if (one.id > two.id) {
      return 1
    } else return 0
  })
}