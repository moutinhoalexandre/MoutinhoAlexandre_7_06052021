import React from "react";
import "./Authentification.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/icon-left-font-monochrome-black.png";

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
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username" className="input" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">
                Coming Soon : sign in with social platforms
              </p>
              <div className="social-media">
                <a href="#top" className="social-icon">
                  <i className="fab fa-facebook-f">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>
                <a href="#top" className="social-icon">
                  <i className="fab fa-twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </a>
                <a href="#top" className="social-icon">
                  <i className="fab fa-google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="#top" className="social-icon">
                  <i className="fab fa-linkedin-in">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="text" placeholder="Username" className="input" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input"
                />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">
                Coming Soon : sign in with social platforms
              </p>
              <div className="social-media">
                <a href="#top" className="social-icon">
                  <i className="fab fa-facebook-f">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </i>
                </a>
                <a href="#top" className="social-icon">
                  <i className="fab fa-twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </i>
                </a>
                <a href="#top" className="social-icon">
                  <i className="fab fa-google">
                    <FontAwesomeIcon icon={faGoogle} />
                  </i>
                </a>
                <a href="#top" className="social-icon">
                  <i className="fab fa-linkedin-in">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </i>
                </a>
              </div>
            </form>
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
