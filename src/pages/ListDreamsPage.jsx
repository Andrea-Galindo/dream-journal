import React, { useState, useEffect } from "react";
import ListDreams from "../components/ListDreams";
import { UserAuth } from "../context/AuthContext";
import AppNavbar from "../components/AppNavbar";
import { db } from "../firebase";
import {
  where,
  getDocs,
  query,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";
// import "../styles/Dashboard.css";

const ListDreamsPage = () => {
  const uid = localStorage.getItem("uid");
  const [dreams, setDreams] = useState([]);
  const [filteredDreams, setFilteredDreams] = useState([]);


  useEffect(() => {
    const getUserDreams = async () => {
      const dreamsList = [];
      // query to get only the dreams from logged in user
      const dreamsRef = query(collection(db, "dreams"), where("uid", "==", uid));
      const querySnapshot = await getDocs(dreamsRef);
      querySnapshot.forEach((doc) => {
        dreamsList.push({ ...doc.data(), id: doc.id });
      });
      setDreams(dreamsList);
      setFilteredDreams(dreamsList);
      // console.log(dreamsList);
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
