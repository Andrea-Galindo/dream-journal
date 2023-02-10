import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { db } from "../firebase";
import {
  where,
  getDocs,
  query,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";

import AppNavbar from "../components/AppNavbar";
import Dream from "../components/Dream";
import "../styles/ListDreamsPage.css";

const ListDreamsPage = () => {
  const navigate = useNavigate();
  const [dreams, setDreams] = useState([]);
  const [filteredDreams, setFilteredDreams] = useState([]);

  useEffect(() => {
    const getUserDreams = async () => {
      const uid = localStorage.getItem("uid");
      const dreamsList = [];
      // query to get only the documents that match logged in user id
      const q = query(collection(db, "dreams"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        dreamsList.push({ ...doc.data(), id: doc.id });
      });
      setDreams(dreamsList);
      setFilteredDreams(dreamsList);
      console.log(dreamsList);
    };
    getUserDreams();
  }, [setDreams]);

  const handleDelete = async (id) => {
    const dreamRef = doc(db, "dreams", id);
    try {
      await deleteDoc(dreamRef);
      setDreams(dreams.filter((dream) => dream.id !== id));
      setFilteredDreams(dreams.filter((dream) => dream.id !== id));
      navigate("/dreams");
    } catch (err) {
      alert(err);
    }
  };

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
    setFilteredDreams(
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

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = dreams.filter((dream) => {
      return dream.peopleandplaces.toLowerCase().search(value) !== -1;
    });
    setFilteredDreams(result);
  };

  return (
    <div className="dreams-page">
      <AppNavbar />
      <Container className="d-flex justify-content-center mt-3">
        <div className="w-100 m-2" style={{ maxWidth: "600px" }}>
          <input
            className="form-control form-search-input"
            placeholder="Search by people and places"
            type="text"
            onChange={(event) => handleSearch(event)}
          />
        </div>
      </Container>
      <div style={{ padding: 10 }}>
        {filteredDreams.map((dream) => {
          return (
            <Dream
              key={dream.id}
              id={dream.id}
              date={dream.date}
              title={dream.title}
              description={dream.description}
              feelings={dream.feelings}
              peopleandplaces={dream.peopleandplaces}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </div>

      {dreams.length === 0 && (
        <div className="m-5 text-center">
          You have not yet created dream records
        </div>
      )}
      {/* {filteredDreams.length > 0 && (
        <ListDreams
        dreamsData={dreams}
        searchData={serachDreams}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
       )}     */}
    </div>
  );
};

export default ListDreamsPage;
