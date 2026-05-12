import ProductListItem from '../components/products/ProductListItem';
import { useProductStore } from '../hooks/storeHooks/useProductStore';
import { useState, useEffect } from 'react';
import { useSort } from '../hooks/useSort';
import AdminProductControls from '../components/products/AdminProductControls';

export default function ProductPage() {

  const { products, lastVisitedId, setLastVisitedId } = useProductStore()

  const [search, setSearch] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  const handleSearchColor = () => {
    if (!searchFocused && search === '') return { color: 'inherit' }
    else if (results.length === 0) return { color: 'var(--red-bright)' }
    else return { color: 'var(--green-bright)' }
  }

  const results = useSort(products, search)

  useEffect(() => {
    if (lastVisitedId) {
      document.getElementById(`product-${lastVisitedId}`)?.
        scrollIntoView({ behavior: "instant" })
      setLastVisitedId('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }


  return (
    <main>
      <h1 className='h-margin-down'>Find Your Desk Nemesis</h1>
      <search className='input-wrapper input-search'>
        <input
          type="search"
          id='search'
          placeholder=' '
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)}
          onKeyDown={handleKeyDown} />
        <label
          htmlFor="search"
          style={handleSearchColor()}
        >Search</label>
      </search>

      <AdminProductControls />


      {results.length === 0
        ? <h2 className='h-margin-up'>No matches. The intern lost the file.</h2>
        : ''
      }

      {results.length === 1
        ? < ProductListItem
          key={results[0].id}
          {...results[0]}
          single={true}
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