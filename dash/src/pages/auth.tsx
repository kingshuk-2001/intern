import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

interface Props{
  authenticate : any
}

const Auth:React.FC<Props>= ({ authenticate}) => {
  let [admin,setAdmin] = useState<any>(null)

  const navigate = useNavigate();

  //auth button handler
  const onClick = () => {

    authenticate(admin);
    navigate("profile");
  };
  return (
    <div className="auth-page">
      <h2> Please Login to view dashboard </h2>
      <div className="btns">
        <input type='checkbox' onChange={()=>setAdmin(true)} />Admin 
        <button onClick={onClick}>Login</button>
      </div>
    </div>
  );
};

export default Auth;
