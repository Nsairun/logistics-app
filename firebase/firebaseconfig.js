import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDCU-qaI3tFr7ecxbqBHw_UP_6hnd-QCD0",
    authDomain: "logisticsauth-8d0ab.firebaseapp.com",
    projectId: "logisticsauth-8d0ab",
    storageBucket: "logisticsauth-8d0ab.appspot.com",
    messagingSenderId: "1008529125314",
    appId: "1:1008529125314:web:6a917c82ef0b2e120ef05b",
    measurementId: "G-QZGD0YQGCJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;