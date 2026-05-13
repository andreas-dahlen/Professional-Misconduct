import { useColorStyle } from '../../hooks/useColorStyle'

export default function InputElement({ value, type, id, changeFn, keyDownFn, inputClass, wrapperClass, customLabel, colorType, override, setOverride }) {


  const { validationInputCol, validationLabelCol } = useColorStyle()


  const effectiveType = override ? null : colorType

  const labelCol = validationLabelCol(effectiveType)
  const inputCol = validationInputCol(effectiveType)

  return (
    <div className={`input-wrapper ${wrapperClass || ''}`}>
      <input
        id={id || type}
        type={type}
        placeholder=' '
        value={value}
        className={`def-input input-anim ${inputClass || ''}`}
        style={{ ...inputCol, ...labelCol }}
        onChange={(e) => {
          { colorType ? setOverride(true) : '' }
          changeFn(e.target.value)
        }}
        onKeyDown={keyDownFn}
      />
      <label htmlFor={id || type} style={{ textTransform: 'capitalize', ...labelCol }}>{customLabel || id || type}</label>
    </div>
  )
}


