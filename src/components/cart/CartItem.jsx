import { imgPath } from '../../data/settings'

export default function CartItem({ id, name, img, price }) {
  return (

    <article id={`product-${id}`} className='product-card'>
      <h2>{name}</h2>
      <div className='img-and-text'>
        <div className='product-img'>
          <img src={imgPath + img} />
        </div>
      </div>
      <h3>{price} kr</h3>
    </article >
  )
}