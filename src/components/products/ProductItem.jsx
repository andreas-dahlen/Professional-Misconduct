import { useNavigate } from 'react-router'

export default function ProductItem({ id, name, profession, img, description, price }) {
  const src = "/Professional-Misconduct/src/assets/"

  const goTo = useNavigate()

  const handleNavigation = () => {
    const urlName = name.replace(/\s/g, '')
    goTo(`${urlName}/${id}`)
  }

  return (
    <div className='product-card' onClick={handleNavigation}>

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