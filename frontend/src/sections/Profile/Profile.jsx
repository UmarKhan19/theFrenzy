// Profile.jsx
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer';
import ProfileSidebar from '../../Components/ProfileSidebar';
import ProfileArea from '../../Components/ProfileArea';
// import ChangePassword from '../../Components/ChangePassword';


const Profile= () => {


  return (
      <div>
        <Navbar />
        <div className="container mx-auto flex">
        <ProfileSidebar />
      <ProfileArea/>
          {/* <ChangePassword /> */}
        </div>
        <Footer />
      </div>
  );
}

export default Profile;
