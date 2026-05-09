import { useNavigate } from 'react-router'
import { useProductStore } from '../../hooks/storeHooks/useProductStore'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { imgPath } from '../../data/settings'

export default function ProductListItem({ id, name, profession, img, description, price }) {
  const { setLastVisitedId } = useProductStore()
  const { user, isAdmin } = useUserStore()

  const goTo = useNavigate()

  const handleNavigation = () => {
    const urlName = name.replace(/\s/g, '')
    setLastVisitedId(id)
    isAdmin && user
      ? goTo(`${urlName}/${id}/admin`)
      : goTo(`${urlName}/${id}`)
  }

  return (
    <div id={`product-${id}`} className='product-card' onClick={handleNavigation}>

      <h2>{name}</h2>
      <h3>{profession}</h3>

      <div className='img-and-text'>
        <p className='description'>{description}</p>
        <div className='product-img'>
          <img src={imgPath + img}></img>
        </div>

      </div>

      <h3>{price}</h3>

    </div >
  )
}