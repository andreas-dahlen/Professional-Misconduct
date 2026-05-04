import ProductItem from '../components/products/ProductItem';
import { placeholderList } from '../api/placeholderList';


export default function ProductPage() {

  return (
    <main>
      <h1>find you pick!</h1>
      <input type="search" />

      <div className='product-grid'>
        {placeholderList.map((item) => (
          <ProductItem
            key={item.name}
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