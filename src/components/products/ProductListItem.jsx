import { findImg } from '../../hooks/utils/findImg'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useProductNavigation } from '../../hooks/utils/useProductNavigation'

export default function ProductListItem({ id, name, profession, img, description, price, single }) {

  const { isAdmin } = useUserStore()

  const { productNavigation } = useProductNavigation()

  const handleKeyDown = (e) => e.key === 'Enter' && productNavigation(name, id)

  const trimmedDesc = description.slice(0, description.lastIndexOf(' ', 100)) + '...'

  return (
    <article tabIndex={0}
      id={`product-${id}`}
      className={`${single ? 'individual-card-bg' : 'product-card-bg'} ${isAdmin ? 'card-bg-admin' : ''} card-anim `}
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
            <img src={findImg(img)} />
          </div>

        </div>

        <h3 className='card-price'>{price} kr</h3>

      </div >
    </article>
  )
}