import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-CUPzyvT1lCPCZkFC8cGMimsGa8d_WeE",
  authDomain: "improved-chat-app-2dba8.firebaseapp.com",
  projectId: "improved-chat-app-2dba8",
  storageBucket: "improved-chat-app-2dba8.appspot.com",
  messagingSenderId: "931786934656",
  appId: "1:931786934656:web:bd50ecaeea2d2b32799965",
  measurementId: "G-TY99N8M6R6",
};

const app = initializeApp(firebaseConfig);

export default collection(getFirestore(app), "messages");
export const db = getFirestore(app);
