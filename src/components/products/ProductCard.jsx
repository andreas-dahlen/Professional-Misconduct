import { NavLink } from 'react-router'
import { imgPath } from '../../data/settings'

export default function ProductCard({ prod, children }) {


  return (
    <>
      <div className='product-card'>
        <h2>{prod.name}</h2>
        <h3>{prod.profession}</h3>
        <div className='img-and-text'>
          <p className='description'>{prod.description}</p>
          <div className='product-img'>
            <img src={imgPath + prod.img}></img>
          </div>
        </div>
        <h3>{prod.price}</h3>

        <div className='product-card-children'>
          {children}
        </div>
      </div >

      <NavLink to={-1} className="def-btn">BACK</NavLink>
    </>
  )
}