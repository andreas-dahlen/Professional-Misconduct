import ProductListItem from '../components/products/ProductListItem';
import { useProductStore } from '../hooks/storeHooks/useProductStore';
import { useState, useEffect } from 'react';
import { useSort } from '../hooks/useSort';
import { useUserStore } from '../hooks/storeHooks/useUserStore';
import { NavLink } from 'react-router';

export default function ProductPage() {

  const { products, lastVisitedId, setLastVisitedId } = useProductStore()
  const [search, setSearch] = useState('')
  const { user, isAdmin } = useUserStore()

  const results = useSort(products, search)

  useEffect(() => {
    if (lastVisitedId) {
      document.getElementById(`product-${lastVisitedId}`)?.
        scrollIntoView({ behavior: "instant" })
      setLastVisitedId('')
    }
  }, [])

  return (
    <main>
      <h1>find you pick!</h1>
      <search>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </search>
      {user && isAdmin
        ? <NavLink to='/products/create'>Create New Product</NavLink>
        : ''
      }

      <div className='product-grid'>
        {results.map((item) => (
          < ProductListItem
            key={item.id}
            id={item.id}
            name={item.name}
            profession={item.profession}
            img={item.img}
            description={item.description}
            price={item.price}
          />
        ))
        }
      </div>
    </main>
  )
}