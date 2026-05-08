import ProductItem from '../components/products/ProductItem';
import { placeholderList } from '../data/placeholderList';
import { setDBProducts } from '../data/crud';
import { useProductStore } from '../hooks/useProductStore';
import { useState, useEffect } from 'react';
import { useSort } from '../hooks/useSort';

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

  return (
    <main>
      <h1>find you pick!</h1>
      <search>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <p>{search}</p>
      </search>

      <button onClick={() => setDBProducts(placeholderList)}> seed products</button>

      <div className='product-grid'>
        {results.map((item) => (
          <ProductItem
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