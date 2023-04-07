import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-kKuwmRl6DzfO3-xszx5m_wrQ_zNMtJQ",
  authDomain: "projekt-innowacja2022.firebaseapp.com",
  projectId: "projekt-innowacja2022",
  storageBucket: "projekt-innowacja2022.appspot.com",
  messagingSenderId: "957696284620",
  appId: "1:957696284620:web:e0c0ca94b66e1620f06f69"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
