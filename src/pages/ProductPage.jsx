import ProductItem from '../components/products/ProductItem';
import { placeholderList } from '../data/placeholderList';
import { setDBProducts } from '../data/crud';
import { useProductStore } from '../hooks/useProductStore';


export default function ProductPage() {

  const { products } = useProductStore()

  return (
    <main>
      <h1>find you pick!</h1>
      <input type="search" />

      <button onClick={() => setDBProducts(placeholderList)}> seed products</button>

      <div className='product-grid'>
        {products.map((item) => (
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