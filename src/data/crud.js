import { addDoc, getDocs, collection, getDoc, doc, setDoc } from 'firebase/firestore'
import { dataBase } from './fireData'
import { errorHandling } from './errorHandling'

export async function getDBProducts() {
  const productCollectionRef = collection(dataBase, 'products')
  try {
    const productSnapshot = await getDocs(productCollectionRef)
    const productList = productSnapshot.docs.map(snap => ({
      id: snap.id,
      ...snap.data()
    }))

    const sortedList = productList.sort((one, two) => {
      if (one.id < two.id) {
        return -1
      } else if (one.id > two.id) {
        return 1
      } else return 0
    })
    return sortedList
  } catch (error) {
    console.error('something went wrong', error)
    return { error: errorHandling(error) }
  }
}

export async function getUserInfo(loginInfo) {
  const userDocRef = doc(dataBase, 'users', loginInfo.uid)

  try {
    const userSnapshot = await getDoc(userDocRef)
    const isAdmin = userSnapshot.data()?.admin ?? false

    console.log('userSnapshot:', userSnapshot)
    return {
      email: loginInfo.email,
      uid: loginInfo.uid,
      isAdmin
    }
  } catch (error) {
    console.error('something went wrong', error)
    return { error: errorHandling(error) }
  }
}

export async function createNewUser(newUserInfo) {
  const newUserRef = doc(dataBase, 'users', newUserInfo.uid)
  try {
    const newUserSnap = await setDoc(newUserRef, {
      email: newUserInfo.email,
      uid: newUserInfo.uid,
      isAdmin: false
    })
    console.log('new user ', newUserSnap)
    return newUserSnap

  } catch (error) {
    console.error("something went wrong creating a user", error)
    return { error: errorHandling(error) }
  }
}

export async function setDBProducts(products) {
  const col = collection(dataBase, 'products')
  const promises = products.map(product => addDoc(col, product))
  await Promise.all(promises)
}