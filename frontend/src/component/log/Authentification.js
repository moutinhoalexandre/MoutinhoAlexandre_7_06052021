import React from "react";
import "./Authentification.css";
import { useState } from "react";
import Logo from "../../assets/icon-left-font-monochrome-black.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Authentification() {
  const [signUp, setSignUp] = useState(false);

  const changeSignUp = () => {
    setSignUp(!signUp);
  };

  return (
    <>
      <div className={signUp ? "containers " : "containers sign-up-mode "}>
        <div className="forms-containers">
          <div className="signin-signup">
            <SignIn />
            <SignUp func={changeSignUp} />
          </div>
        </div>

        <div className="panels-containers">
          <div className="panel left-panel">
            <div className="content">
              <h3>Déjà inscrit?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="boutton transparent"
                id="sign-in-btn"
                onClick={changeSignUp}
              >
                Sign in
              </button>
            </div>
            <img src={Logo} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Nouveau ici ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="boutton transparent"
                id="sign-up-btn"
                onClick={changeSignUp}
              >
                Sign up
              </button>
            </div>
            <img src={Logo} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
