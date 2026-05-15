import { useState } from 'react'
import { validateProduct } from '../../validation/validation'
import { imgPath } from '../../data/settings'
import { useNavigate } from 'react-router'
import InputElement from './InputElement'
import { useColorStyle } from '../../hooks/useColorStyle'

export default function ProductForm({ changes, setChanges, onSave, isDisabled }) {

  const goTo = useNavigate()

  const [msgs, setMsgs] = useState({})
  const [fieldColors, setFieldColors] = useState({
    name: null, profession: null, price: null, description: null
  })

  const { validationInputCol, validationLabelCol } = useColorStyle()

  const labelCol = validationLabelCol(fieldColors.description)
  const inputCol = validationInputCol(fieldColors.description)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') e.target.blur()
  }

  const saveOrchestrator = (e) => {
    e?.preventDefault()
    const errors = validateProduct(changes)

    const fields = ['name', 'profession', 'price', 'description']
    setFieldColors(Object.fromEntries(fields.map(field => [field, errors[field] ? 'error' : 'success'])))

    if (Object.keys(errors).length > 0) return setMsgs(errors)
    onSave(changes)
  }

  return (
    <main>

      <form className='product-item'>
        <div className='product-item-box' data-admin={true}>
          <div className='product-item-content'>
            <div className='content-box'>
              <InputElement
                type="text"
                id="name"
                customLabel="Product Name"
                value={changes.name}
                colorType={fieldColors.name}
                changeFn={(value) => {
                  setFieldColors(prev => ({ ...prev, name: null }))
                  setChanges(prev => ({ ...prev, name: value }))
                }}
                keyDownFn={handleKeyDown}
              />
              <span className='error'>{msgs.name}</span>

              <InputElement
                type="text"
                id="profession"
                value={changes.profession}
                colorType={fieldColors.profession}
                changeFn={(value) => {
                  setFieldColors(prev => ({ ...prev, profession: null }))
                  setChanges(prev => ({ ...prev, profession: value }))
                }}
                keyDownFn={handleKeyDown}
              />
              <span className='error'>{msgs.profession}</span>

              <div className='img-and-text'>

                <div className='input-wrapper desc-wrapper'>

                  <textarea
                    className='input-anim'
                    id='description'
                    spellCheck='true'
                    autoComplete='off'
                    style={{ ...labelCol, ...inputCol }}
                    value={changes.description}
                    onChange={(e) => {
                      setFieldColors(prev => ({ ...prev, description: null }))
                      setChanges(prev =>
                        ({ ...prev, description: e.target.value }))
                    }}
                  />
                  <label htmlFor="Description" style={{ ...labelCol }}>Description</label>
                </div>
                <div className='product-img'>
                  {changes.img
                    ? <img src={imgPath + changes.img} />
                    : <img src={`${imgPath}placeholder.png`} />
                  }
                </div>

              </div>
              <span className='error'>{msgs.description}</span>

              <InputElement
                type="number"
                customLabel="Price"
                value={changes.price}
                colorType={fieldColors.price}
                changeFn={(value) => {
                  setFieldColors(prev => ({ ...prev, price: null }))
                  setChanges(prev => ({ ...prev, price: Number(value) }))
                }}
                keyDownFn={handleKeyDown}
              />
              <span className='error'>{msgs.price}</span>
            </div>
          </div>
        </div>
      </form >

      <button type="button" className="btn-def btn-anim" onClick={saveOrchestrator} disabled={isDisabled}>Save</button>
      <button className="btn-def btn-anim" onClick={() => goTo(-1)} disabled={isDisabled}>CANCEL</button>

    </main >
  )
}