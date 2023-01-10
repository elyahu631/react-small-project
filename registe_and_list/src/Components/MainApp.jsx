import React from 'react'

import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Main from '../Pages/Main';
import Notes from '../Pages/Notes';



const MainApp = () => {



    return (
        <div style={{ }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              
                <Link to={"/"}>Login</Link>
                <Link to={"/signup"}>Register</Link>
                <Link to={"/home"}>Main</Link>
                <Link to={"/notes"}>Notes</Link>
            </div>
            <Routes>
          
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />    
                <Route path="/home" element={<Main/>} />   
                <Route path="/notes" element={<Notes/>} />     
            </Routes>
            <div style={{ display: "flex", justifyContent: "space-around" }}>         
            </div>
        </div>
    );
};

export default MainApp;

