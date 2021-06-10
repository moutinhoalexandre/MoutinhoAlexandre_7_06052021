import React from "react";
import "./Authentification.css";
import { useState } from "react";
import Logo from "../../assets/icon-left-font-monochrome-black.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Authentification() {
  const [signIn, setSignIn] = useState(false);

  const changeSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <>
      <div className={signIn ? "container sign-up-mode" : "container"}>
        <div className="forms-container">
          <div className="signin-signup">
            <SignIn />
            <SignUp />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={changeSignIn}
              >
                Sign up
              </button>
            </div>
            <img src={Logo} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={changeSignIn}
              >
                Sign in
              </button>
            </div>
            <img src={Logo} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
