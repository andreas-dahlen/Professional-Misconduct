import { useState } from 'react'
import { validateProduct } from '../../validation/validation'
import { imgPath } from '../../data/settings'
import { useNavigate } from 'react-router'
import InputElement from './InputElement'


export default function ProductForm({ changes, setChanges, onSave, awaiting }) {

  const goTo = useNavigate()

  const [msgs, setMsgs] = useState({})

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }

  const saveOrchestrator = () => {
    const errors = validateProduct(changes)
    if (Object.keys(errors).length > 0) {
      return setMsgs(errors)
    }
    onSave(changes)
  }

  return (
    <main>

      <form className='product-card product-card-edit'>

        <InputElement
          type="text"
          id="name"
          customLabel="Product Name"
          value={changes.name}
          changeFn={(value => setChanges(prev => ({ ...prev, name: value })))}
          keyDownFn={handleKeyDown}
        />
        <span className='error'>{msgs.name}</span>

        <InputElement
          type="text"
          id="profession"
          value={changes.profession}
          changeFn={(value => setChanges(prev => ({ ...prev, profession: value })))}
          keyDownFn={handleKeyDown}
        />
        <span className='error'>{msgs.profession}</span>

        <div className='img-and-text img-and-text-edit'>

          <label htmlFor="description">Description</label>
          <textarea
            className='input-anim'
            id='description'
            spellCheck='true'
            value={changes.description}
            onChange={(e) =>
              setChanges(prev =>
                ({ ...prev, description: e.target.value }))}
          />
          <span className='error'>{msgs.description}</span>
          <div className='product-img'>
            {changes.img
              ? <img src={imgPath + changes.img} />
              : <img src={`${imgPath}placeholder.png`} />
            }
          </div>

        </div>

        <InputElement
          type="number"
          value={changes.price}
          customLabel="Price"
          changeFn={(value => setChanges(prev => ({ ...prev, price: Number(value) })))}
          keyDownFn={handleKeyDown}
        />
        <span className='error'>{msgs.price}</span>

        <div className='product-card-children'>
          <button type="button" className="btn-def btn-anim" onClick={saveOrchestrator} disabled={awaiting}>Save</button>
        </div>
      </form >

      <button className="btn-def btn-anim" onClick={() => goTo(-1)}>CANCEL</button>

    </main>
  )
}