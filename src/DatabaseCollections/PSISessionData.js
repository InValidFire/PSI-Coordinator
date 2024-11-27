import { db } from "../config.js";
import {
    arrayUnion,
    collection,
    addDoc,
    updateDoc,
    doc, deleteDoc, getDocs, getDoc,
} from "firebase/firestore";

const sessionCollectionRef = collection(db, "psisessions");

export const createSession = async (
    day, time, classid, classname,
    topic, leader, location) => {
    await addDoc(sessionCollectionRef, {
        day: day,
        time: time,
        classid: classid,
        classname: classname,
        topic: topic,
        leader: leader,
        location: location,
        studentsAttending: [],
        verified: false,
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

export const addStudent = async (id, name, email) => {
    const sessionDoc = doc(db, "psisessions", id);
    const newStudent = { name, email };
    await updateDoc(sessionDoc, {
        studentsAttending: arrayUnion(newStudent), // Use arrayUnion to avoid overwriting
    });
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
            studentsAttending: session.studentsAttending,
            leader: session.leadername,
            location: session.location,
        });
    });

    return list;
};

export const findSession = async (id) => {
    try {
        const sessionDoc = await getDoc(doc(sessionCollectionRef, id)); // retrieve the document by ID
        if (sessionDoc.exists()) {
            const session = sessionDoc.data();
            return [{
                id: session.id,
                day: session.day,
                time: session.time,
                classid: session.classid,
                classname: session.classname,
                topic: session.topic,
                leader: session.leader,
                location: session.location,
            }];
        } else {
            console.log("Session not found.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching session:", error);
        return [];
    }
};
