import { db } from "../config.js";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

//get references of collections named 'students'
const studentsCollectionRef = collection(db, "students");

export const createStudent = async (studentName, studentEmail) => {
    await addDoc(studentsCollectionRef, {
        name: studentName,
        email: studentEmail,
    });
};

export const deleteStudent = async (id) => {
    const studentDoc = doc(db, "students", id);
    await deleteDoc(studentDoc);
};

export const readStudents = async () => {
    const data = await getDocs(studentsCollectionRef);
    const students = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    let list = [];

    students.map((student) => {
        list.push({
            name: student.name,
            email: student.email,
        });
    });

    return list;
};
