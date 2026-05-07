import Joi from 'joi'


export const loginSchema = Joi.object({
  email:
    Joi.string()
      .email()
      .trim()
      .required(),
  password:
    Joi.string()
      .required()
})

export function getLoginErrorMessage(email, password) {
  if (email === '' && password === '') return 'Please enter your email and password'
  if (email === '') return 'Please enter a valid email'
  if (password === '') return 'Please enter a valid password'
  return 'Wrong email or/and password'
}