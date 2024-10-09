import { db } from "../config.js";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

//get references of collections named 'students'
const psiLeaderCollectionRef = collection(db, "psileaders");

export const createLeader = async (leaderName, leaderEmail) => {
    await addDoc(psiLeaderCollectionRef, {
        name: leaderName,
        email: leaderEmail,
    });
};

export const deleteLeader = async (id) => {
    const leaderDoc = doc(db, "students", id);
    await deleteDoc(leaderDoc);
};

export const readLeaders = async () => {
    const data = await getDocs(psiLeaderCollectionRef);
    const psileaders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let list = [];

    psileaders.map((leaders) => {
        list.push({
            name: leaders.name,
            email: leaders.email,
        });
    });

    return list;
};




