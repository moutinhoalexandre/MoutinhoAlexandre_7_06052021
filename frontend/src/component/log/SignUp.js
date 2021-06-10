import React from 'react'
import './SignUp.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
    return (
      <>
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
            <input type="password" placeholder="Password" className="input" />
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
      </>
    );
}
