import React, { useState } from "react";
import Logo from "../assets/twitter-logo-4 1.png";
import { Link } from "react-router-dom";

function Login() {
  const [isEmail, setIsEmail] = useState(true);

  return (
    <div className="Login">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="img.." />
          <p className="createPara"> Log in to Twitter </p>
        </div>

        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Phone number" required />

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
