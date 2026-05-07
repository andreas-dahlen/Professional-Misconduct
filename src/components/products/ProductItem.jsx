import { useNavigate } from 'react-router'
import { useProductStore } from '../../hooks/useProductStore'

export default function ProductItem({ id, name, profession, img, description, price }) {
  const src = "/Professional-Misconduct/src/assets/"

  const { setLastVisitedId } = useProductStore()

  const goTo = useNavigate()

  const handleNavigation = () => {
    const urlName = name.replace(/\s/g, '')
    setLastVisitedId(id)
    goTo(`${urlName}/${id}`)
  }

  return (
    <div id={`product-${id}`} className='product-card' onClick={handleNavigation}>

      <h2>{name}</h2>
      <h3>{profession}</h3>

      <div className='img-and-text'>
        <p className='description'>{description}</p>
        <div className='product-img'>
          <img src={src + img}></img>
        </div>

      </div>

      <h3>{price}</h3>

    </div >
  )
}