import { addDoc, getDocs, collection } from 'firebase/firestore'
import { dataBase } from './fireData'

const productCollection = collection(dataBase, 'products')

export async function getDBProducts() {
  const productSnapshot = await getDocs(productCollection)

  const productList = productSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  const sortedList = productList.sort((one, two) => {
    if (one.id < two.id) {
      return -1
    } else if (one.id > two.id) {
      return 1
    } else return 0
  })
  return sortedList
}

export async function setDBProducts(products) {
  const col = collection(dataBase, 'products')
  const promises = products.map(product => addDoc(col, product))
  await Promise.all(promises)
}