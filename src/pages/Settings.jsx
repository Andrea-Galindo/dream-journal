import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import AppNavbar from "../components/AppNavbar";
import "../styles/Settings.css";

const Settings = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("uid");
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleResetPassword = async () => {

  }
  return (
    <>
      <AppNavbar />
      <div className="settings-container">
        <div
          className="w-100 px-4 d-flex justify-content-between"
          style={{ maxWidth: "400px" }}
        >
          <div className="fw-bold">
            Account <br /> <p className="fw-light email">{user && user.email}</p>
          </div>
          {/* <p className="text-decoration-underline">{user && user.email}</p> */}
          <Button className="settings-btn" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
        <div
          className="w-100 px-4 pt-3 d-flex justify-content-between"
          style={{ maxWidth: "400px" }}
        >
          <div className="fw-bold">
            Reset Password <br/>{" "}
            <p className="fw-light">send an email with reset instructions</p>
          </div>
          <Button className="settings-btn" onClick={handleResetPassword}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default Settings;
