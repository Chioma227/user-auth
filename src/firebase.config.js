// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_PhixjQOOBxTsZMAvp5AwlkN6InMPg3I",
  authDomain: "tic-tac-toe-c47f5.firebaseapp.com",
  projectId: "tic-tac-toe-c47f5",
  storageBucket: "tic-tac-toe-c47f5.appspot.com",
  messagingSenderId: "419934033046",
  appId: "1:419934033046:web:3525f5b7cb6fc22ebb9eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export default Auth