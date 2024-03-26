import React from "react";
import Logo from "../assets/twitter-logo-4 1.png";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="Login">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="img.." />
          <p className="createPara"> Log in to Twitter </p>
        </div>

        <input type="text" placeholder="phone number, Email Address" required />
        <input type="tel" placeholder="Password" required />

        <button className="nextButton">login</button>

       <div className="links">
       <p>Forgot password?</p>
       {/* <div className="signLink"> */}
       <Link to={"/signup"}>Sign up to Twitter</Link>

       {/* </div> */}
       <p></p>
       </div>
      </div>
    </div>
  );
}

export default Login;
