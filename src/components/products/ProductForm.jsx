import { useState } from 'react'
import { validateProduct } from '../../validation/validation'
import { useNavigate } from 'react-router'
import InputElement from './InputElement'
import { useColorStyle } from '../../hooks/utils/useColorStyle'
import { findImg } from '../../hooks/utils/findImg'

export default function ProductForm({ changes, setChanges, onSave, isDisabled }) {

  const goTo = useNavigate()

  const [msgs, setMsgs] = useState({})
  const [fieldColors, setFieldColors] = useState({
    name: null, profession: null, price: null, description: null, img: null
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

    setFieldColors({
      name: errors.name ? 'error' : 'success',
      profession: errors.profession ? 'error' : 'success',
      price: errors.price ? 'error' : 'success',
      description: errors.description ? 'error' : 'success',
      img: errors.img ? 'error' : 'success'
    })

    if (Object.keys(errors).length > 0) return setMsgs(errors)
    onSave(changes)
  }

  return (
    <main>
      <div className='product-page-controls'>

        <button type="button" className="btn-semi-big btn-anim" onClick={saveOrchestrator} disabled={isDisabled}>Save</button>
        <button className="btn-semi-big btn-anim" onClick={() => goTo(-1)} disabled={isDisabled}>CANCEL</button>


      </div>

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
                customLabel="Role"
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
                    id='desc'
                    spellCheck='true'
                    autoComplete='off'
                    placeholder=' '
                    style={{ ...labelCol, ...inputCol }}
                    value={changes.description}
                    onChange={(e) => {
                      setFieldColors(prev => ({ ...prev, description: null }))
                      setChanges(prev =>
                        ({ ...prev, description: e.target.value }))
                    }}
                  />
                  <label htmlFor="desc" style={{ ...labelCol }}>Description</label>
                  <span className='error'>{msgs.description}</span>
                </div>

                <div className='img-and-input'>
                  <div className='product-img'>

                    <img src={findImg(changes.img)} />
                  </div>

                  <InputElement
                    type="url"
                    customLabel="image url"
                    value={changes.img}
                    colorType={fieldColors.img}
                    changeFn={(value) => {
                      setFieldColors(prev => ({ ...prev, img: null }))
                      setChanges(prev => ({ ...prev, img: value }))
                    }}
                    keyDownFn={handleKeyDown}
                  />
                  <span className='error'>{msgs.img}</span>
                </div>







              </div>




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


    </main >
  )
}