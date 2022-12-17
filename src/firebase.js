import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC0amJ4x-1hDu2CEIdZ2ktvZItFjboTi1w",
    authDomain: "tinder-clone-76360.firebaseapp.com",
    projectId: "tinder-clone-76360",
    storageBucket: "tinder-clone-76360.appspot.com",
    messagingSenderId: "146639214683",
    appId: "1:146639214683:web:165787dec13972dbb1877e"
  };

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)