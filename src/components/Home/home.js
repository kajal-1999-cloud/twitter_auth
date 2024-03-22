import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/twitter-logo-4 1.png";
import Google from "../../assets/google-icon 1.png";
import Apple from "../../assets/logo-apple 1.png";
import "./style.css";
function home() {
  return (
    <div className="home">
    
        <div className="Join">
          <div className="logo">
            <img src={Logo} alt="logo..." />
          </div>
          <div className="para">
            <h1>Happening now</h1>
            <h3>Join Twitter today</h3>
            <div className="button">
              <img src={Google} alt="" />
              <p className="">Sign up with Google</p>
            </div>{" "}
            <div className="button">
              <img src={Apple} alt="" />
              <p className="">Sign up with Apple</p>
            </div>{" "}
            <p className="button" style={{ padding: "20px" }}>
              <Link
                to={"/signup"}
                style={{ color: "black", fontWeight: "500" }}
              >
                Sign up with phone or email
              </Link>
            </p>
            <p>
              By signing up you agree to the <a href="#">Terms of service</a>{" "}
              and{" "}
              <a href="#">
                Privacy <br />
                Policy{" "}
              </a>{" "}
              including <a href="#">Coockie Use.</a>
            </p>
            <p>
              Already have an account? 
              <Link to={"/login"}> log in</Link>
            </p>
          </div>
        </div>
      </div>
  );
}

export default home;
