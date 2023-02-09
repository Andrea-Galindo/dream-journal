import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import NewDream from "./pages/NewDream";
import Settings from "./pages/Settings";
import ListDreamsPage from "./pages/ListDreamsPage";
import ForgotPassword from "./pages/ForgotPassword";
import { db } from "./firebase";
import {
  where,
  getDocs,
  query,
  collection,
} from "firebase/firestore";

function App() {
  const [dreams, setDreams] = useState([]);
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
    
      console.log(dreamsList);
    };
    getUserDreams();
  }, []);

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/newdream"
            element={
              <ProtectedRoute>
                <NewDream />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/dreams"
            element={
              <ProtectedRoute>
                <ListDreamsPage dreamsData={dreams} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
