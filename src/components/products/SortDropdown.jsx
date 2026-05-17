import { useState, useRef, useEffect } from 'react'
export default function SortDropdown({ handleSort, sortConfig }) {

  const [isDropped, setIsDropped] = useState(false)

  const [sortMsg, setSortMsg] = useState('')

  const { type, dir } = sortConfig

  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) setIsDropped(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const sortCol = (msg) => {
    if (msg === '') return null
    return { color: 'var(--green-bright)' }
  }

  const sortBoarder = (msg) => {
    if (msg === '') return null
    return { borderColor: 'var(--green-bright)' }
  }

  const sortX = (msg) => {
    if (msg === '') return null
    return { color: 'rgb(80, 143, 195)' }
  }

  return (


    <div className='sorter-box' ref={ref}>

      <div className='drop-down'>
        <button onClick={() => setIsDropped(!isDropped)}
          style={sortBoarder(sortMsg)}>
          {`${sortMsg}`}</button>
        <div>{isDropped ? '▲' : '▼'}</div>
        <span className={`sort-text ${sortMsg !== '' && 'sort-text-move'}`} style={sortCol(sortMsg)}>Sort</span>
      </div>
      <button className='sort-btn-exit'
        disabled={type === null && isDropped === false}
        style={{ ...sortBoarder(sortMsg), ...sortX(sortMsg) }}
        onClick={() => {
          handleSort(null)
          setSortMsg('')
          setIsDropped(false)
        }}> X
      </button>
      {isDropped &&
        <div className='dropped-box'>
          <button className={`sort-btn btn-anim ${type === 'name' ? 'selected' : ''}`}
            onClick={() => {
              handleSort('name')
              setSortMsg('Name')
            }
            }>{`Name A-Z ${dir.name === true ? '⇧' : '⇩'}`}</button>

          <button className={`sort-btn btn-anim ${type === 'prof' ? 'selected' : ''}`}
            onClick={() => {
              handleSort('prof')
              setSortMsg('Role')
            }}>
            {`Role A-Z ${dir.prof === true ? '⇧' : '⇩'}`}</button>

          <button className={`sort-btn btn-anim ${type === 'price' ? 'selected' : ''}`}
            onClick={() => {
              handleSort('price')
              setSortMsg('Price')
            }}>
            {`Price min-max ${dir.price === true ? '⇩' : '⇧'}`}</button>
        </div>
      }
    </div>
  )
}