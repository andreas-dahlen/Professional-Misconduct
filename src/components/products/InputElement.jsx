export default function InputElement({ value, type, id, changeFn, keyDownFn, inputClass, wrapperClass, customLabel }) {

  return (
    <div className={`input-wrapper ${wrapperClass || ''}`}>
      <input
        id={id || type}
        type={type}
        placeholder=' '
        value={value}
        className={`def-input ${inputClass || ''}`}
        onChange={(e) => changeFn(e.target.value)}
        onKeyDown={keyDownFn}
      />
      <label htmlFor={id || type} style={{ textTransform: 'capitalize' }}>{customLabel || id || type}</label>
    </div>
  )
}


