
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFOL7r5kdV76OBJNA4B8Uqs_mOcv1Cqf4",
  authDomain: "proyecto-2-utn-e0e78.firebaseapp.com",
  projectId: "proyecto-2-utn-e0e78",
  storageBucket: "proyecto-2-utn-e0e78.appspot.com",

  //storageBucket: "proyecto-2-utn-e0e78.firebasestorage.app",
  messagingSenderId: "512626373956",
  appId: "1:512626373956:web:c9a5ba87f50bd50d78d311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database