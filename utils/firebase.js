import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBc8Z-u9h8mtcdsKmOsWkpyoh3ql6zNvN0",
  authDomain: "eventmanager-1cb9d.firebaseapp.com",
  projectId: "eventmanager-1cb9d",
  storageBucket: "eventmanager-1cb9d.appspot.com",
  messagingSenderId: "1007623920680",
  appId: "1:1007623920680:web:cf883bddf2ff075c68a91d",
  measurementId: "G-RQ9C8BEY7Y"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const provider = new EmailAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { provider, auth, storage };
export default db;
