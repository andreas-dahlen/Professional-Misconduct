import { imgPath } from '../../data/settings'
import { useProductNavigation } from '../../hooks/useProductNavigation'

export default function ProductListItem({ id, name, profession, img, description, price, single }) {

  const { productNavigation } = useProductNavigation()

  const handleKeyDown = (e) => e.key === 'Enter' && productNavigation(name, id)

  const trimmedDesc = description.slice(0, description.lastIndexOf(' ', 100)) + '...'

  return (
    <article tabIndex={0}
      id={`product-${id}`}
      className={single ? 'individual-card-bg' : 'product-card-bg'}
      onClick={() => productNavigation(name, id)}
      onKeyDown={handleKeyDown}>
      <div className='product-card'>

        <h2>{name}</h2>
        <h3>{profession}</h3>

        <div className='img-and-text'>

          <div className='text-bg-box'>
            <p className='description'>{trimmedDesc}</p>

          </div>
          <div className='product-img'>
            <img src={imgPath + img} />
          </div>

        </div>

        <h3 className='card-price'>{price} kr</h3>

      </div >
    </article>
  )
}