import { imgPath } from '../../data/settings'
import { useUserStore } from '../../hooks/storeHooks/useUserStore'
import { useNavigate } from 'react-router'

export default function ProductItem({ prod, children }) {

  const { isAdmin } = useUserStore()
  const goTo = useNavigate()

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
              <h2>{prod.price} kr</h2>
            </div>
          </div>
        </div>
        <div className='product-card-children'>
          {children}
        </div>
        <button className="def-btn btn-anim" onClick={() => goTo(-1)}>BACK</button>
      </article >

    </>
  )
}