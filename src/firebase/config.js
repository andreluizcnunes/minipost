import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARBuu6PyhdN-6ouZJ_9_qPk-Xhoy-LYM0",
  authDomain: "miniblog-8c7b7.firebaseapp.com",
  projectId: "miniblog-8c7b7",
  storageBucket: "miniblog-8c7b7.appspot.com",
  messagingSenderId: "670632985770",
  appId: "1:670632985770:web:afaa38d8d4610cf7ba7cd3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };