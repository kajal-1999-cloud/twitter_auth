import React, { useState } from "react";
import Logo from "../assets/twitter-logo-4 1.png";
import DateOfBirth from "../components/DOB/dateOfBirth";
import { Link } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";

function Signup() {
  const [isEmail, setIsEmail] = useState(false);
  const [selectNext, setSelectNext] = useState(false);
  // const navigate = useNavigate()

  // const confirmSignUp(){
  //   navigate("/login")
  //   setSelectNext(false);

  // }
  return (
    <div className="signup">
      {!selectNext ? (
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="img.." />
            <p className="createPara"> Create an account </p>
          </div>
          {!isEmail ? (
            <>
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone number" required />
              <button
                className="choose"
                onClick={() => {
                  setIsEmail(true);
                }}
              >
                Use Email
              </button>
            </>
          ) : (
            <>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <button
                className="choose"
                onClick={() => {
                  setIsEmail(false);
                }}
              >
                Use Phone
              </button>
            </>
          )}
          <label style={{ fontWeight: "700" }}>Date of Birth</label>
          <p className="para">
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
            Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio
            enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit
            viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
            congue.
          </p>
          {/* <input type="date" /> */}
          <DateOfBirth />
          <button className="nextButton" onClick={() => setSelectNext(true)}>
            Next
          </button>
        </div>
      ) : (
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="img.." />
            <p className="createPara">Sign up to Twitter </p>
          </div>

          <input type="text" placeholder="Password" required />
          <input type="text" placeholder="Confirm Password" required />

          <div className="">
            <Link to={"/login"}>
              <button className="confirmButton" onClick={()=>setSelectNext(false)}>
                Confirm
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
