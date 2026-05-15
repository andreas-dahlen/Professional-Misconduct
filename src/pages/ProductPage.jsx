import ProductListItem from '../components/products/ProductListItem';
import { useProductStore } from '../hooks/storeHooks/useProductStore';
import { useState, useEffect } from 'react';
import { useSort } from '../hooks/useSort';
import AdminProductControls from '../components/products/AdminProductControls';
import { useColorStyle } from '../hooks/useColorStyle';

export default function ProductPage() {

  const { products, lastVisitedId, setLastVisitedId } = useProductStore()

  const [search, setSearch] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  const { searchLabelCol, searchInputCol } = useColorStyle()
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
      <AdminProductControls />
      <search className='input-wrapper input-slim'>
        <input
          className='input-anim'
          type="search"
          id='search'
          placeholder=' '
          autoComplete='off'
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          style={searchInputCol(searchFocused, search, results.length)}
        />
        <label
          htmlFor="search"
          style={searchLabelCol(searchFocused, search, results.length)}
        >Search</label>
      </search>




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