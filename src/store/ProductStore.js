import { defineStore } from 'pinia'
import { ref } from "vue";
import { firestore } from "../firebaseConfig"
import { doc, setDoc, getDoc, updateDoc, addDoc, getDocs, collection, query, deleteDoc } from "firebase/firestore";

const myQuery = () => getDocs(query(collection(firestore, "reservation")));


export const useProduct = defineStore('product', () => {
  const products = ref(null);

  const addProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(firestore, "reservation"), data);
        await getProducts()
    }
    catch( error ) {
        alert(error.message)
    }
  }

  const deleteProduct = async (data) => {
    try {
      const collectionRef = collection(firestore, "reservation")
      await deleteDoc(doc(collectionRef, data.ref))
      await getProducts()
    }
    catch( error ) {
      alert("error")
    }
  }



  const getProducts = async () => {
    const onSuccess = ({docs}) => {
      products.value = [
        ...docs.map((item) => ({
          ...item.data(),
          ref: item.ref,
        }))
      ]
    }
    myQuery().then(onSuccess).catch((error) => {alert(error.message)})
  }

  const updateProduct = (data) => {
    updateDoc(data.ref, {name: data.name, date: data.date, from: data.from, to: data.to, place: data.place})
    .then(getProducts)
  }

  return {
    products,
    addProduct, 
    getProducts,
    deleteProduct,
    updateProduct
  }
});
