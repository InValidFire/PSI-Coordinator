import { db } from "../config.js";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
} from "firebase/firestore";

const sessionCollectionRef = collection(db, "psisessions");

export const createSession = async (day, time, classnum, classname, topic, leadername, location) => {
    await addDoc(sessionCollectionRef, {
        day: day,
        time: time,
        classnum: classnum,
        classname: classname,
        topic: topic,
        leader: leadername,
        location: location
    });
};

export const updateSession = async (id, topic, location) => {
    const sessionDoc = doc(db, "psisessions", id);
    const newFields = {
        topic: topic,
        location: location
    };
    await updateDoc(sessionDoc, newFields);
};
