import { imgPath } from '../../data/settings'
import { useProductNavigation } from '../../hooks/useProductNavigation'

export default function SingleListItem({ id, name, profession, img, description, price }) {

  const { productNavigation } = useProductNavigation()

  const handleKeyDown = (e) => e.key === 'Enter' && productNavigation(name, id)

  return (
    <article tabIndex={0}
      id={`product-${id}`} className='product-card-bg'
      onClick={() => productNavigation(name, id)} onKeyDown={handleKeyDown}
    >
      <div className='product-card'>

        <h2>{name}</h2>
        <h3>{profession}</h3>

        <div className='img-and-text'>

          <div className='text-bg-box'>
            <p className='description'>{description}</p>

          </div>
          <div className='product-img'>
            <img src={imgPath + img}></img>
          </div>

        </div>

        <h3 className='card-price'>{price} kr</h3>

      </div >
    </article>
  )
}