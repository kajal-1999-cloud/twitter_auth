import React, { useState } from "react";
import Logo from "../assets/twitter-logo-4 1.png";
import DateOfBirth from "../components/DOB/dateOfBirth";

function Signup() {
  const [isEmail, setIsEmail] = useState(true);

  return (
    <div className="signup">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="img.." />
          <p className="createPara"> Create an account </p>
        </div>
        {isEmail ? (
          <>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone number" required />
            <button className="choose" onClick={() => {setIsEmail(true)}}>
              Use email
            </button>
          </>
        ) : (
          <>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone number" required />
            <p className="choose">Use Phone</p>
          </>
        )}
        <label style={{ fontWeight: "700" }}>Date of Birth</label>
        <p className="para">
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        <input type="date" />
        {/* <DateOfBirth/> */}
        <button className="nextButton">Next</button>
      </div>
    </div>
  );
}

export default Signup;
