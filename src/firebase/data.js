import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsMBEhbtGqB9DAkXBfFpLmeL1uPN5lOUI",
    authDomain: "good-proyect.firebaseapp.com",
    projectId: "good-proyect",
    storageBucket: "good-proyect.appspot.com",
    messagingSenderId: "948017502947",
    appId: "1:948017502947:web:306ad382098e17dc6943d6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);