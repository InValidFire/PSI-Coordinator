import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { db } from "../config.js";
import { collection, addDoc } from "firebase/firestore";

const accountsCollectionRef = collection(db, "users");

export const signup = async (
    firstName,
    lastName,
    email,
    role,
    password,
    classPSI
) => {
    const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    await resp.user.updateProfile({ displayName: `${firstName} ${lastName}` });
    const name = [firstName, lastName];
    const userid = resp.user.uid;
    if (role === "psi") {
        addDoc(accountsCollectionRef, {
            id: userid,
            name: name.join(" "),
            email: email,
            role: role,
            verified: false,
            classPSI: classPSI,
        });
    } else {
        addDoc(accountsCollectionRef, {
            id: userid,
            name: name.join(" "),
            email: email,
        });
    }
};

export const passwordReset = async (email) => {
    return await firebase.auth().sendPasswordResetEmail(email);
};

export const login = async (email, password) => {
    const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    return resp.user;
};