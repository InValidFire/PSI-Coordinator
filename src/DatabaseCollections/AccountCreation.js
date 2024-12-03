import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { db } from "../config.js";
import {collection, addDoc, getDocs, query, where, updateDoc, arrayUnion, doc} from "firebase/firestore";

const accountsCollectionRef = collection(db, "users");

export const signup = async (
    firstName,
    lastName,
    email,
    password,
    role,
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
            signedUpSessions: [],
        });
    } else {
        addDoc(accountsCollectionRef, {
            id: userid,
            name: name.join(" "),
            role: "student",
            email: email,
            signedUpSessions: [],
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
    console.log(resp.user);
    return resp.user;
};

export const verification = async (email) => {
    const data = await getDocs(accountsCollectionRef);
    const psileaders = data.docs.map((doc) => doc.data());

    const leader = psileaders.find((leader) => leader.email === email);

    if (leader)
        return leader.verified === true;
    else
        return false;
};

export const leaderOrStudent = async (email) => {
    const data = await getDocs(accountsCollectionRef);
    const users = data.docs.map((doc) => doc.data());

    const leadOrStu = users.find((leadOrStu) => leadOrStu.email === email);

    if (leadOrStu)
        return leadOrStu.role;
    else
        return false;
};

export const findUser = async (uid) => {
    const data = await getDocs(accountsCollectionRef);
    const users = data.docs.map((doc) => doc.data());

    const user = users.find((user) => user.id === uid);

    if (user)
        return user;
    else
        return false;
};

export const addSessionId = async (sessionid, uid) => {
    try {
        const userQuery = query(accountsCollectionRef, where("id", "==", uid));
        const querySnapshot = await getDocs(userQuery);

        if (querySnapshot.empty)
            return false;

        const userDoc = querySnapshot.docs[0];
        const userDocRef = userDoc.ref;

        await updateDoc(userDocRef, {
            signedUpSessions: arrayUnion(sessionid), // Add session ID without duplicating
        });

        return true; // Success
    } catch (error) {
        return false;
    }
};

export const findLeaders = async () => {
    try {
        // Create a query to find all documents where role is "psi"
        const leadersQuery = query(accountsCollectionRef, where("role", "==", "psi"));

        // Execute the query
        const querySnapshot = await getDocs(leadersQuery);

        // Map over the results and return the data
        const leaders = querySnapshot.docs.map((doc) => doc.data());

        return leaders; // Return the list of leaders
    } catch (error) {
        console.error("Error fetching leaders:", error);
        return []; // Return an empty array in case of an error
    }
};

export const verifyLeader = async (id) => {
    try {
        // Query to find the leader document in Firestore
        const leaderQuery = query(
            collection(db, "users"),
            where("id", "==", id)
        );
        const querySnapshot = await getDocs(leaderQuery);

        if (!querySnapshot.empty) {
            const leaderDoc = querySnapshot.docs[0]; // Get the first matching document
            const leaderDocRef = doc(db, "users", leaderDoc.id); // Get document reference

            // Update the "verified" field to true
            await updateDoc(leaderDocRef, { verified: true });
        }
    } catch (error) {
        console.error("Error verifying leader:", error);
    }
};