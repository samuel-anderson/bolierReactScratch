import { db } from "../config/firebase";
import {
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";

export const fetchCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  //for testing error
  //await Promise.reject(new Error('whoop we received an error));
  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map((docSnapshot) => {
    return {
      id: docSnapshot.id,
      data: docSnapshot.data(),
    };
  });
  return items;
};

export const addDocument = async (collectionName, data) => {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, data);
  } catch (error) {
    console.error("Error creating document:", error);
  }
};

export const deleteDocument = async (collectionName, id) => {
  try {
    const _document = doc(db, collectionName, id);
    await deleteDoc(_document);
  } catch (error) {
    console.error("Error creating document:", error);
  }
};
