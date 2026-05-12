import { NavLink } from 'react-router'
import { imgPath } from '../../data/settings'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'

export default function ProductItem({ prod, children }) {

  const { isAdmin } = useUserStore()

  return (
    <>
      <article className='product-item'>
        <h1>{prod.name}</h1>
        <h3>{prod.profession}</h3>

        <div className='product-item-box' data-admin={isAdmin}>

          <div className='product-item-content'>
            <div className='product-img'>
              <img src={imgPath + prod.img} />
            </div>
            <div className='text-bg-box'>

              <p className='description'>{prod.description}</p>
              <h2>{prod.price}</h2>
            </div>
          </div>
        </div>
        <div className='product-card-children'>
          {children}
        </div>
        <NavLink to={-1} className="def-btn cancel-highlight">BACK</NavLink>
      </article >

    </>
  )
}