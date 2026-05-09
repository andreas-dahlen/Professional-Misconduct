import { NavLink } from 'react-router'
import { imgPath } from '../data/settings'
import { useFindProduct } from '../hooks/useFindProduct'
import { useState } from 'react'
import { validateEditProduct } from '../validation/validation'

export default function AdminEditPage() {

  const prod = useFindProduct()

  const [changes, setChanges] = useState(prod)
  const [msgs, setMsgs] = useState({})

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }

  const saveOrchestrator = () => {
    const errors = validateEditProduct(changes)

    if (Object.keys(errors).length > 0) {
      return setMsgs(errors)
    }
  }

  return (
    <main>

      <div className='product-card product-card-edit'>

        <input value={changes.name}
          onChange={(e) =>
            setChanges(prev =>
              ({ ...prev, name: e.target.value }))}
          onKeyDown={handleKeyDown} />

        <input value={changes.profession}
          onChange={(e) =>
            setChanges(prev =>
              ({ ...prev, profession: e.target.value }))}
          onKeyDown={handleKeyDown} />
        <div className='img-and-text img-and-text-edit'>

          <textarea
            id='description'
            spellCheck='true'
            value={changes.description}
            onChange={(e) =>
              setChanges(prev =>
                ({ ...prev, description: e.target.value }))}
          >


          </textarea>
          {/* <p className='description'>{prod.description}</p> */}
          <div className='product-img'>
            <img src={imgPath + prod.img}></img>
          </div>
        </div>
        <input value={changes.price}
          onChange={(e) =>
            setChanges(prev =>
              ({ ...prev, price: e.target.value }))}

        ></input>

        <div className='product-card-children'>
          <button onClick={saveOrchestrator}>Save</button>
        </div>
      </div >

      <NavLink to={-1} className="def-btn">BACK</NavLink>
    </main>
  )
}