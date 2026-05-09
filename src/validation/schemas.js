import Joi from 'joi'
import { nameErrorMessage, professionErrorMessage, descriptionErrorMessage, priceErrorMessage } from './messages'

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
      .min(3)
      .max(15)
      .required()
      .trim()
      .messages(nameErrorMessage),
  profession:
    Joi.string()
      .min(3)
      .max(15)
      .required()
      .trim()
      .messages(professionErrorMessage),
  description:
    Joi.string()
      .min(10)
      .max(100)
      .required()
      .trim()
      .messages(descriptionErrorMessage),
  price: Joi.number()
    .positive()
    .integer()
    .required()
    .messages(priceErrorMessage)
})