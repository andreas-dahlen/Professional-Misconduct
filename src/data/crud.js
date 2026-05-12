import { getDocs, collection, getDoc, doc, setDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { dataBase } from './fireData'
import { errorHandling } from './errorHandling'
import { defaultIdSort } from '../hooks/useSort'

export async function getDBProducts() {
  const productCollectionRef = collection(dataBase, 'products')
  try {
    const productSnapshot = await getDocs(productCollectionRef)
    const productList = productSnapshot.docs.map(snap => ({
      ...snap.data(),
      uid: snap.id
    }))

    return defaultIdSort(productList)
  } catch (error) {
    console.error('something went wrong', error)
    return { error: errorHandling(error) }
  }
}

/**
 In case of product misshandling. Used to reset the products. also needs to call getDBProducts in order to get uid.
 */
export async function resetDBProducts(products) {
  const col = collection(dataBase, 'products')
  try {
    const snapshot = await getDocs(col)
    const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref))
    await Promise.all(deletePromises)

    const addPromises = products.map(product => addDoc(col, product))
    await Promise.all(addPromises)

    return getDBProducts()
  } catch (error) {
    console.error('something went wrong resetting products', error)
    return { error: errorHandling(error) }
  }
}

export async function getUserInfo(loginInfo) {
  const userDocRef = doc(dataBase, 'users', loginInfo.uid)

  try {
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) return null
    //TODO change to isAdmin everywhere! :D
    const isAdmin = userSnapshot.data()?.admin ?? false
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
    await setDoc(newUserRef, {
      email: newUserInfo.email,
      uid: newUserInfo.uid,
      isAdmin: false
    })
    return true

  } catch (error) {
    console.error("something went wrong creating a user", error)
    return { error: errorHandling(error) }
  }
}

export async function editProduct(change) {
  const prodRef = doc(dataBase, 'products', change.uid)
  try {
    await setDoc(prodRef, change)
    return true

  } catch (error) {
    console.error("something went wrong creating a user", error)
    return { error: errorHandling(error) }
  }
}

export async function addProduct(prod) {
  const docCollection = collection(dataBase, 'products')
  try {
    const newProdSnap = await addDoc(docCollection, {
      ...prod,
      img: 'placeholder.png',
    })
    return { ...prod, img: 'placeholder.png', uid: newProdSnap.id }

  } catch (error) {
    console.error("something went wrong creating a product", error)
    return { error: errorHandling(error) }
  }
}

export async function deleteProduct(uid) {
  const prodRef = doc(dataBase, 'products', uid)
  try {
    await deleteDoc(prodRef)
    return true
  } catch (error) {
    console.error('something went wrong deleting product', error)
    return { error: errorHandling(error) }
  }
}

