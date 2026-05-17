import { editSchema } from './schemas'

export const validateProduct = (change) => {
  const { error } = editSchema.validate(
    { name: change.name, profession: change.profession, description: change.description, price: change.price, img: change.img },
    { abortEarly: false }
  )
  if (!error) return {}
  return Object.fromEntries(error.details.map(detail => [detail.path[0], detail.message]))
}