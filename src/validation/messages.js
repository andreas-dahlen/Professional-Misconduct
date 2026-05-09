export function getLoginErrorMessage(email, password) {
  if (email === '' && password === '') return 'Please enter email and password'
  if (email === '') return 'Please enter a valid email'
  if (password === '') return 'Please enter a valid password'
  return 'Wrong email or/and password'
}


export const nameErrorMessage = {
  'string.empty': "",
  'string.min': "",
  'string.max': ""
}
export const professionErrorMessage = {
  'string.empty': "",
  'string.min': "",
  'string.max': ""
}

export const descriptionErrorMessage = {
  'string.empty': "",
  'string.min': "",
  'string.max': ""
}

export const priceErrorMessage = {
  'any.required': "",
  'number.positive': "",
  'number.base': ""
}