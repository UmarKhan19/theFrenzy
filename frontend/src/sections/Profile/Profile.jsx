import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer';
import ChangePassword from "../../Components/ChangePassword";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import ProfileSidebar from '../../Components/ProfileSidebar';
import ProfileArea from '../../Components/ProfileArea';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex">
        <ProfileSidebar />
        <ProfileArea />
      <ChangePassword />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
