import React from "react";
import coverImage from "../assets/back-twitter 1.png";
import Footer from "../components/Footer/footer";
import Home from "../components/Home/home";
import "./style.css";
function home() {
  return (
    <div className="homePage">
      <div className="container">
        <img className="cover" src={coverImage} alt="img..." />
       <Home/>
      </div>
      <Footer />
    </div>
  );
}

export default home;
