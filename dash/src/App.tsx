import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import './App.css' 
import {LoginProvider} from './LoginContext'

const App = () => {
  const [auth, setAuth]= useState<any>(null);
  const [admin, setAdmin]= useState<any>(null);

  // useEffect(() => {

  //   let user = localStorage.getItem("user");
  //   console.log(user);
  //   user  ? setAuth(true) : setAuth(false);

  //   let admin = localStorage.getItem("admin");
  //   console.log(admin);
  //   admin  ? setAdmin(true) : setAdmin(false);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("auth", auth);
  //   localStorage.setItem("admin",admin);
  // }, [auth]);

  const savedet:any =  (admin:any) =>{
    setAdmin(admin)
    setAuth(true)
  }

  return (

   <LoginProvider>
      <BrowserRouter>
     
        <Routes>
        
          {!auth && (
           
            <Route
              path="/auth"
              element={<Auth authenticate={(admin:any) => 
                {savedet(admin)}} />}
            />
       
          )}
  
          {auth && (
            <>
              <Route
                path="/profile"
                element={<Profile admin={admin} logout={() => setAuth(false)} />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<Info />} />
            
            </>
          )}
          {auth && admin &&
              <Route path="/contact" element={<Contact />} />
          }
          <Route path="*" element={<Navigate to={auth ? "/profile" : "/auth"} />} />
         
        </Routes>
    
      </BrowserRouter>
   </LoginProvider>
  );
};

export default App;
