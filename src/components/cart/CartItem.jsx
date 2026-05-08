const src = "/Professional-Misconduct/src/assets/"
export default function CartItem(id, name, img, price) {

  return (
    <div id={`product-${id}`} className='product-card'>

      <h2>{name}</h2>

      <div className='img-and-text'>
        <div className='product-img'>
          <img src={src + img}></img>
        </div>

      </div>

      <h3>{price}</h3>

    </div >
  )
}