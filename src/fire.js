import { getAuth } from "@firebase/auth";
import { initializeApp } from "@firebase/app"
 
export const app = initializeApp({
  apiKey: "AIzaSyB515HosMXoNkx8thFhVxQJOevnd1GckxU",
  authDomain: "js14-auth.firebaseapp.com",
  projectId: "js14-auth",
  storageBucket: "js14-auth.appspot.com",
  messagingSenderId: "169580476806",
  appId: "1:169580476806:web:e826a8e5f130e1917d5407"
});

export const auth = getAuth()