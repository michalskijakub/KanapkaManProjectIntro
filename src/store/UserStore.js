import { defineStore } from 'pinia'
import { ref } from "vue";
import { auth, firestore } from "../firebaseConfig"
import router from "../router";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export const useUser = defineStore('user', () => {
  const userAuth = ref(null);
  const userData = ref(null);
  const provider = new GoogleAuthProvider()

  const createUser = async (user) => {
    const userDoc = doc(firestore, "users", user.uid)
    const data = {
      name: user.email.split("@")[0],
    };
    userData.value = data;
    await setDoc(userDoc, data);
  };

  const getUser = async (user) => {
    const userDoc = doc(firestore, "users", user?.uid)
    const docSnap = await getDoc(userDoc);
    if (docSnap.exists()) {
      userData.value = docSnap.data()
    }
  }

  const register = (email, password) => {
    const onSuccess = async ({ user }) => {
      userAuth.value = user;
      userData.value = {
        uid: user.uid,
        name: user.email.split("@")[0],
      };
      await createUser(user);
      router.push("/login");
    };

    createUserWithEmailAndPassword(auth, email, password)
    .then(onSuccess)
    .catch((error) => {
      alert(error.message)
    })
  };

  const registerWithGoogle = () => {
    const onSuccess = async ({ user }) => {
      userAuth.value = user;
      userData.value = {
        uid: user.uid,
        name: user?.displayName,
      };
      await createUser(user);
      router.push("/login");
    };

    signInWithPopup(auth, provider)
    .then(onSuccess)
    .catch((error) => {
      alert(error.message)
    })
  }

  const loginWithGoogle = () => {
    const onSuccess = async ({ user }) => {
      userAuth.value = user;
      userData.value = {
        uid: user.uid,
        name: user?.displayName,
      };
      await getUser(user);
      router.push("/dashboard");
    };

    signInWithPopup(auth, provider)
    .then(onSuccess)
    .catch((error) => {
      alert(error.message)
    })
  }

  const login = (email, password) => {
    const onSuccess = async ({ user }) => {
      userAuth.value = user;
      userData.value = {
        uid: user.uid,
        name: user?.displayName,
      };
      await getUser(user);
      router.push("/dashboard");
    };
    signInWithEmailAndPassword(auth, email, password)
    .then(onSuccess)
    .catch((error) => {
      alert(error.message)
    })
  }

  const logout = () => {
    signOut(auth)
    .then(() => {
      userAuth.value = null
      userData.value = null
      router.push("/")
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userAuth.value = user
        userData.value = user.data
      }
      else {
        userAuth.value = null
        userData.value = null
      }
    })
  }

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Check your email")
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return {
    userAuth,
    userData,
    register,
    logout,
    login,
    getCurrentUser,
    resetPassword,
    registerWithGoogle,
    loginWithGoogle,
  }
});
