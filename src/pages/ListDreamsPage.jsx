import React, { useState, useEffect } from "react";
import ListDreams from "../components/ListDreams";
import { UserAuth } from "../context/AuthContext";
import AppNavbar from "../components/AppNavbar";
import { db } from "../firebase";
import {
  where,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
  snapShot,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";
// import SearchBar from "./SearchBar";
// import "../styles/Dashboard.css";

const ListDreamsPage = () => {
  const { user } = UserAuth();
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const getUserDreams = async () => {
      console.log(user.uid);
      if (user.uid !== undefined) {
        // find a way to get the uid immediatly
        const dreamsList = [];
        // query to get only the documents that match logged in user id
        const q = query(collection(db, "dreams"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          dreamsList.push({ ...doc.data(), id: doc.id });
        });
        setDreams(dreamsList);
        console.log(dreamsList);
      }
    };
    getUserDreams();
  }, []);

  // Delete dream from firebase
  const handleDelete = async (id) => {
    const dreamRef = doc(db, "dreams", id);
    try {
      await deleteDoc(dreamRef);
      setDreams(dreams.filter((dream) => dream.id !== id));
    } catch (err) {
      alert(err);
    }
  };

  // Update a dream locally 
  const handleUpdate = (
    id,
    newDate,
    newTitle,
    newDescription,
    newPeopleandplaces,
    newFeelings,
    uid
  ) => {
    setDreams(
      dreams.map((dream) =>
        dream.id === id
          ? {
              ...dream,
              date: newDate,
              title: newTitle,
              description: newDescription,
              peopleandplaces: newPeopleandplaces,
              feelings: newFeelings,
              uid: uid,
            }
          : dream
      )
    );
  };

  return (
    <>
      <AppNavbar />
      <ListDreams
        dreamsData={dreams}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      /> 
    </>
  );
};

export default ListDreamsPage;
