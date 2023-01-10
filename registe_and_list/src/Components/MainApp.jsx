import React, { useContext, useEffect } from 'react'

import { Link, Route, Routes } from 'react-router-dom';
import EditProfilePage from '../Pages/EditProfilePage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import ProfilePage from '../Pages/ProfilePage';
import SignupPage from '../Pages/SignupPage';
import { localUsersContext } from '../Context/LocalUsersContextProvider';
import ImageInput from './ImageInput';


const Main = () => {
    const { usersLocal } = useContext(localUsersContext)
    useEffect(() => {
        const updateLocalStorage=()=>{
            localStorage.setItem('localUsersContext', JSON.stringify(usersLocal))
        };
        window.addEventListener('beforeunload',updateLocalStorage)
        return () => {
            window.removeEventListener('beforeunload',updateLocalStorage)
        }

    }, [usersLocal]);


    return (
        <div style={{ direction: "rtl" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* <Link to={"/"}>דף בית</Link> */}
                <Link to={"/"}>התחברות</Link>
                <Link to={"/signup"}>הרשמה</Link>
                <Link to={"/profile"}>פרופיל</Link>
         
            </div>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/editprofile" element={<EditProfilePage />} />

            </Routes>
        </div>
    );
};

export default Main;

