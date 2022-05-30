import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import { LoginContext } from "../contexts/LoginContext";

interface Props{
  logout : any
  admin :any
}

const Profile:React.FC<Props> = ({ logout, admin }) => {


  return (
    <div className="prof">

      <div className="nav">
      <Link className="link" to="/dashboard">Dashboard</Link>
      <Link className="link" to="/about">Info</Link>
      {admin && 
      <Link className="link" to="/contact">Contact</Link>}
      </div>
      <h1> Hi you are logged in</h1>
      <button onClick={logout}>Logout</button>
    
    </div>
  );
};

export default Profile;
