import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProfilePicture from "./components/ProfilePicture";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Skills from "./components/Skills";
import "./styles.css";


export default function App() {
  return (
      <div>
      <Header />
      <ProfilePicture />   {/* Image will show here */}
      <AboutMe />          {/* About Me Section */}
      <Skills />           {/* Skills Section */}
      <Profile />          {/* Profile Info */}
      <Button />           {/* Button */}
      <Footer />           {/* Footer */}
    </div>
  );
}
