import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import NewDream from "./pages/NewDream";
import Settings from "./pages/Settings";
import ListDreams from "./pages/ListDreams";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
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
                <ListDreams />
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
