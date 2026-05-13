export function getLoginErrorMessage(email, password) {
  if (email === '' && password === '') return 'Please enter email and password'
  if (email === '') return 'Please enter a valid email'
  if (password === '') return 'Please enter a valid password'
  return 'Wrong email or/and password'
}


export const nameErrorMessage = {
  'string.empty': "Please enter a product name",
  'string.min': "Product name is too short",
  'string.max': "Product name is too long"
}
export const professionErrorMessage = {
  'string.empty': "Please enter a profession",
  'string.min': "Profession is too short",
  'string.max': "Profession is too long"
}

export const descriptionErrorMessage = {
  'string.empty': "Please enter a description",
  'string.min': "Description is too short",
  'string.max': "Description is too long"
}

export const priceErrorMessage = {
  'any.required': "Please enter a price",
  'number.positive': "Price must be greater than 0",
  'number.base': "Price must be a number",
  'number.max': "Noone is going to buy that",
  'number.integer': "Whole numbers only, we don't do cents here"
}