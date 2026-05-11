import ProductListItem from '../components/products/ProductListItem';
import { useProductStore } from '../hooks/storeHooks/useProductStore';
import { useState, useEffect } from 'react';
import { useSort } from '../hooks/useSort';
import AdminProductControls from '../components/products/AdminProductControls';
import SingleListItem from '../components/products/SingleListItem';

export default function ProductPage() {

  const { products, lastVisitedId, setLastVisitedId } = useProductStore()

  const [search, setSearch] = useState('')

  const results = useSort(products, search)

  useEffect(() => {
    if (lastVisitedId) {
      document.getElementById(`product-${lastVisitedId}`)?.
        scrollIntoView({ behavior: "instant" })
      setLastVisitedId('')
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }


  return (
    <main>
      <h1>find you pick!</h1>
      <search>
        <input type="search" name='search' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
      </search>

      <AdminProductControls />

      {results.length === 1
        ? < SingleListItem
          key={results[0].id}
          {...results[0]}
        />
        : <div className='product-grid'>
          {results.map((item) => (
            < ProductListItem
              key={item.id}
              {...item}
            />
          ))
          }
        </div>
      }
    </main>
  )
}