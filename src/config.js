// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyDo1Oaa4nvwBkIr8dOFrHn2UQi4sEp6yM8",
    authDomain: "psicoordinator-867ee.firebaseapp.com",
    projectId: "psicoordinator-867ee",
    storageBucket: "psicoordinator-867ee.appspot.com",
    messagingSenderId: "680034152295",
    appId: "1:680034152295:web:9b3177c8c58e6e2a5109c2"
});

// Initialize Firebase
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = getAuth(app);