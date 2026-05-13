


export const useColorStyle = () => {

  const searchLabelCol = (searchFocused, search, length) => {

    if (!searchFocused && search === '') return { color: 'inherit' }
    else if (length === 0) return { color: 'var(--red-bright)' }
    else return { color: 'var(--green-bright)' }
  }

  const searchInputCol = (searchFocused, search, length) => {

    if (!searchFocused && search === '') return { borderColor: 'inherit' }
    else if (length === 0) return { borderColor: 'var(--red-bright)' }
    else return { borderColor: 'var(--green-bright)' }
  }

  const validationLabelCol = (type) => {
    if (type === 'error') {
      return { color: 'var(--red-bright)' }
    } else if (type === 'warning') {
      return { color: 'var(--warning-col)' }
    } else if (type === 'success')
      return { color: 'var(--green-bright)' }
    else return { color: 'inherit' }
  }

  const validationInputCol = (type) => {
    if (type === 'error') {
      return { borderColor: 'var(--red-bright)' }
    } else if (type === 'warning') {
      return { borderColor: 'var(--warning-col)' }
    } else if (type === 'success')
      return { borderColor: 'var(--green-bright)' }
    else return { color: 'inherit' }

  }
  return { searchLabelCol, searchInputCol, validationLabelCol, validationInputCol }
}