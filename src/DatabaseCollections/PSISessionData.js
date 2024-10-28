import { db } from "../config.js";
import {
    collection,
    addDoc,
    updateDoc,
    doc, deleteDoc, getDocs,
} from "firebase/firestore";

const sessionCollectionRef = collection(db, "psisessions");

export const createSession = async (
    day, time, classid, classname,
    topic, leadername, location) => {
    await addDoc(sessionCollectionRef, {
        day: day,
        time: time,
        classid: classid,
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

export const deleteSession = async (id) => {
    const sessionDoc = doc(db, "psisessions", id);
    await deleteDoc(sessionDoc);
};

export const readSessions = async () => {
    const data = await getDocs(sessionCollectionRef);
    const sessions = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let list = [];

    sessions.map((session) => {
        list.push({
            id: session.id,
            day: session.day,
            time: session.time,
            classid: session.classid,
            classname: session.classname,
            topic: session.topic,
            leader: session.leadername,
            location: session.location,
        });
    });

    return list;
};
