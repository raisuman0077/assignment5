import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ logout }) => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <h1> You accessed the page after authenticated or authorized user only page </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
