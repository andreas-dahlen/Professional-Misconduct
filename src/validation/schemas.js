import Joi from 'joi'
import { nameErrorMessage, professionErrorMessage, descriptionErrorMessage, priceErrorMessage, imgErrorMessage } from './messages'
import { publicImages } from './publicImgs'

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

export const editSchema = Joi.object({
  name:
    Joi.string()
      .min(1)
      .max(15)
      .required()
      .trim()
      .messages(nameErrorMessage),
  profession:
    Joi.string()
      .min(1)
      .max(20)
      .required()
      .trim()
      .messages(professionErrorMessage),
  description:
    Joi.string()
      .min(10)
      .max(200)
      .required()
      .trim()
      .messages(descriptionErrorMessage),
  price: Joi.number()
    .positive()
    .integer()
    .max(9999)
    .required()
    .messages(priceErrorMessage),
  img: Joi.string()
    .custom((value, helpers) => {
      if (!value) return value
      if (value.startsWith('https://')) return value
      if (publicImages.includes(value)) return value
      return helpers.error('string.invalidImg')
    })
    .optional()
    .allow('')
    .messages(imgErrorMessage)
})