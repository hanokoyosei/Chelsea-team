import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB515HosMXoNkx8thFhVxQJOevnd1GckxU",
  authDomain: "js14-auth.firebaseapp.com",
  projectId: "js14-auth",
  storageBucket: "js14-auth.appspot.com",
  messagingSenderId: "169580476806",
  appId: "1:169580476806:web:e826a8e5f130e1917d5407"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqhJZ0EJ2M3B5AdBY8HZ3Bjcq7cz7UTQY",
//   authDomain: "chelsea-shop.firebaseapp.com",
//   projectId: "chelsea-shop",
//   storageBucket: "chelsea-shop.appspot.com",
//   messagingSenderId: "831737158441",
//   appId: "1:831737158441:web:6d9eb9be77236d86153538"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;