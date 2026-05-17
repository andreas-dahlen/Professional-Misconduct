import { useState } from 'react'

export function useSort(list) {
  const [sortConfig, setSortConfig] = useState({
    type: null,
    dir: {
      name: true,
      prof: true,
      price: true
    }
  })

  const handleSort = (type) => {
    if (!type) return setSortConfig(prev => ({ ...prev, type: null }))
    setSortConfig(prev => ({
      type,
      dir: { ...prev.dir, [type]: !prev.dir[type] }
    }))
  }

  const sorted = () => {
    if (!sortConfig.type) return list

    const dir = sortConfig.dir
    switch (sortConfig.type) {
      case "name":
        return [...list].sort((a, b) => {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()
          if (nameA < nameB) return dir.name ? 1 : -1
          if (nameA > nameB) return dir.name ? -1 : 1
          return 0
        })
      case "prof":
        return [...list].sort((a, b) => {
          const profA = a.profession.toUpperCase()
          const profB = b.profession.toUpperCase()
          if (profA < profB) return dir.prof ? 1 : -1
          if (profA > profB) return dir.prof ? -1 : 1
          return 0
        })
      case "price":
        return [...list].sort((a, b) =>
          (Number(a.price) - Number(b.price)) * (dir.price ? 1 : -1)
        )
    }
  }
  return { results: sorted(), handleSort, sortConfig, setSortConfig }
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