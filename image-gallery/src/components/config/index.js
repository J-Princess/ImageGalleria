// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVHV9h5o4ggCL1l77iotJ2hjIJaOMLptQ",
  authDomain: "galleria-e8367.firebaseapp.com",
  projectId: "galleria-e8367",
  storageBucket: "galleria-e8367.appspot.com",
  messagingSenderId: "878982676092",
  appId: "1:878982676092:web:1b741be149762c9d1dd3f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;